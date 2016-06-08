import calculateBounds from '../../lib/calculateBounds';
import PelagosClient from '../../lib/pelagosClient';

var url = "https://storage.googleapis.com/skytruth-pelagos-production/pelagos/data/tiles/benthos-pipeline/gfw-vessel-scoring-602-tileset-2014-2016_2016-05-17/cluster_tiles/2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z;";

var createOverlayLayer = function(google) {
  function VesselLayer(map) {


    this.map = map;
    // Explicitly call setMap on this overlay.
    this.setMap(map);

    var canvas = document.createElement('canvas');
    canvas.className = 'this.layer.slug';
    canvas.style.border = '1px solid black';
    canvas.style.margin = '0';
    canvas.style.padding = '0';
    canvas.style.borderStyle = 'none';
    canvas.style.borderWidth = '0px';
    canvas.style.position = 'absolute';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.canvas = canvas;

    var ctx = canvas.getContext('2d');
    canvas.style.left = 0 + 'px';
    canvas.style.top = 0 + 'px';
    ctx.width = canvas.width = window.innerWidth;
    ctx.height = canvas.height = window.innerHeight;
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    canvas.ctx = ctx;
  }

  VesselLayer.prototype = new google.maps.OverlayView();
  VesselLayer.prototype.regenerate = function(){
    this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  VesselLayer.prototype.drawTile = function(data) {
    var overlayProjection = this.getProjection();
    var ctx = this.canvas.ctx;
    for (var i = 0, length = data.latitude.length / 2; i < length; i++) {

      var coords = overlayProjection.fromLatLngToDivPixel(new google.maps.LatLng(data.latitude[i], data.longitude[i]));
      this.canvas.ctx.fillRect(coords.x, coords.y, 1, 1);
    }
  }
  VesselLayer.prototype.onAdd = function() {

    var panes = this.getPanes();


    panes.overlayLayer.appendChild(this.canvas);
    // var closure = function (i, bounds){
    //   setTimeout(function(){
    //     new PelagosClient().obtainTile(url + this.bounds[i].toString()).then(this.drawTile.bind(this));
    //   }.bind(this), i * 4000);
    // };
    // for (var i = 0, length = this.bounds.length; i < length; i++) {
    //   new PelagosClient().obtainTile(url + this.bounds[i].toString()).then(this.drawTile.bind(this));
    //
    // }
  };

  VesselLayer.prototype.draw = function() {

    // // We use the south-west and north-east
    // // coordinates of the overlay to peg it to the correct position and size.
    // // To do this, we need to retrieve the projection from the overlay.
    // var overlayProjection = this.getProjection();
    //
    // var canvas = this.canvas;
    // // var sw = overlayProjection.fromLatLngToDivPixel(bound.getSouthWest());
    // // var ne = overlayProjection.fromLatLngToDivPixel(bound.getNorthEast());
    // var ctx = canvas.getContext('2d');
    // canvas.style.left = 0 + 'px';
    // canvas.style.top = 0 + 'px';
    // ctx.width = canvas.width = window.innerWidth;
    // ctx.height = canvas.height = window.innerHeight;
    //
    // ctx.fillStyle = 'rgba(0,0,0,0.4)';
    // ctx.fillRect(0, 0, 1, 1);
    // canvas.ctx = ctx;
    // for (var i = 0, length = this.bounds.length; i < length; i++) {
    //   new PelagosClient().obtainTile(url + this.bounds[i].toString()).then(this.drawTile.bind(this));
    // }
  };

  // The onRemove() method will be called automatically from the API if
  // we ever set the overlay's map property to 'null'.
  VesselLayer.prototype.onRemove = function() {
    this.canvas.parentNode.removeChild(this.canvas);
    this.canvas = null;
  };


  return VesselLayer;
}

export default createOverlayLayer;
