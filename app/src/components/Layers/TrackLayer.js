import BaseOverlay from 'components/Layers/BaseOverlay';
import { hueToRgbString, hueToRgbaString } from 'util/hsvToRgb';
import {
  SHOW_OUTER_TRACK_BELOW_NUM_POINTS,
  TRACK_OVER_COLOR
} from 'constants';

export default class TrackLayer extends BaseOverlay {
  constructor(viewportWidth, viewportHeight) {
    super();
    this.offset = {
      x: 0,
      y: 0
    };

    const canvas = document.createElement('canvas');
    canvas.style.border = '1px solid black';
    canvas.style.margin = '0';
    canvas.style.padding = '0';
    canvas.style.borderStyle = 'none';
    canvas.style.borderWidth = '0px';
    canvas.style.position = 'absolute';
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    ctx.fillStyle = 'rgba(0,0,0,.4)';
    canvas.ctx = ctx;
    this.ctx = this.canvas.ctx;
  }

  clear() {
    this.canvas.ctx.beginPath();
    this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  reposition() {
    // getRepositionOffset is defined on BaseOverlay
    this.offset = this.getRepositionOffset(this.canvas.width, this.canvas.height);
    this.canvas.style[TrackLayer.CSS_TRANSFORM_] = `translate(${this.offset.x}px, ${this.offset.y}px)`;
  }

  onAdd() {
    const panes = this.getPanes();
    panes.overlayLayer.appendChild(this.canvas);
  }

  draw() {}

  onRemove() {
    this.canvas.parentNode.removeChild(this.canvas);
    this.canvas = null;
  }

  /**
   * Calculates the rendering style (color + alpha) to be drawn for the current vessel track/point
   * @param timestamp the current point timestamp
   * @param startTimestamp the starting timestamp from the timeline inner extent
   * @param endTimestamp the end timestamp from the timeline inner extent
   * @param isTimelinePlaying if in the middle of playing, do not display tracks out of innerExtent for perf reasons
   **/
  getDrawStyle(timestamp, color, colorOut, {
    startTimestamp,
    endTimestamp,
    showOuterTrack,
    overStartTimestamp,
    overEndTimestamp
  }) {
    if (overStartTimestamp && overEndTimestamp &&
        timestamp > overStartTimestamp && timestamp < overEndTimestamp) {
      return TRACK_OVER_COLOR;
    } else if (timestamp > startTimestamp && timestamp < endTimestamp) {
      return {
        strokeStyle: color,
        lineWidth: 2
      };
    } else if (showOuterTrack === true) {
      return {
        strokeStyle: colorOut,
        lineWidth: 1
      };
    }
    return false;
  }

  /**
   * Draws a single vessel point of a track
   * @param overlayProjection
   * @param data
   * @param i
   * @param drawStyle
   * @returns {*}
   */
  drawPoint(overlayProjection, data, i, drawStyle) {
    const point = overlayProjection.fromLatLngToDivPixel(
      new google.maps.LatLng(data.latitude[i], data.longitude[i])
    );

    const weight = data.weight[i];
    if (weight > 0.75) {
      this.ctx.fillStyle = drawStyle;
      this.ctx.fillRect(~~point.x - this.offset.x, ~~point.y - this.offset.y, 2, 2);
    } else if (weight > 0.50) {
      this.ctx.fillStyle = drawStyle;
      this.ctx.fillRect(~~point.x - this.offset.x, ~~point.y - this.offset.y, 1, 1);
    } else {
      this.ctx.fillStyle = drawStyle;
      this.ctx.fillRect(~~point.x - this.offset.x, ~~point.y - this.offset.y, 1, 1);
    }
    return point;
  }

  drawTracks(tracks, drawParams) {
    this.clear();
    const overlayProjection = this.getProjection();
    if (!overlayProjection) {
      return;
    }

    tracks.forEach((track) => {
      this._drawTrack(track.data, track.selectedSeries, track.hue, drawParams, overlayProjection);
    });
  }

  /**
   * Draws the tile's content based on the provided vessel data
   *
   * @param data
   * @param series
   * @param drawParams
   */
  _drawTrack(data, series, hue, drawParams, overlayProjection) {
    let point = null;
    let previousPoint = null;
    let drawStyle = null;
    let previousDrawStyle = null;

    // let numPointsDrawn = 0;
    const _drawParams = drawParams;
    const showOuterTrack = _drawParams.timelinePaused || data.latitude.length < SHOW_OUTER_TRACK_BELOW_NUM_POINTS;
    _drawParams.showOuterTrack = showOuterTrack;
    const finalColor = hueToRgbString(hue);
    const finalColorOutOfInnerBounds = hueToRgbaString(hue, 0.4);

    for (let i = 0, length = data.latitude.length; i < length; i++) {
      previousDrawStyle = drawStyle;
      previousPoint = point;
      drawStyle = this.getDrawStyle(data.datetime[i], finalColor, finalColorOutOfInnerBounds, _drawParams);
      if (!drawStyle || (series && series !== data.series[i])) {
        continue;
      }
      // numPointsDrawn++;

      point = this.drawPoint(overlayProjection, data, i, drawStyle.strokeStyle);

      if (previousDrawStyle !== drawStyle || (i > 0 && data.series[i - 1] !== data.series[i])) {
        if (previousDrawStyle) {
          this.ctx.stroke();
        }
        this.ctx.beginPath();
        this.ctx.strokeStyle = drawStyle.strokeStyle;
        this.ctx.lineWidth = drawStyle.lineWidth;
        if ((i > 0 && data.series[i - 1] === data.series[i]) && previousPoint) {
          this.ctx.moveTo(~~previousPoint.x - this.offset.x, ~~previousPoint.y - this.offset.y);
        }
      }
      this.ctx.lineTo(~~point.x - this.offset.x, ~~point.y - this.offset.y);
    }

    // console.log(numPointsDrawn)

    this.ctx.stroke();
  }
}

TrackLayer.CSS_TRANSFORM_ = (() => {
  const div = document.createElement('div');
  const transformProps = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];
  for (let i = 0; i < transformProps.length; i++) {
    const prop = transformProps[i];
    if (div.style[prop] !== undefined) {
      return prop;
    }
  }

  // return unprefixed version by default
  return transformProps[0];
})();
