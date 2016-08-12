import React, { Component } from 'react';
import $ from 'jquery';
import CoverPageStyle from '../../../styles/components/c-cover-page.scss';
import Slider from 'react-slick';
import Header from '../../containers/Header';
import MenuMobile from '../Shared/MenuMobile';
import BoxTriangleStyle from '../../../styles/components/c-box-triangle.scss';
import LogoLDF from '../../../assets/logos/ldf_logo.png';
import sliderBackground1 from '../../../assets/images/home_slider_1-1.png';
import sliderBackground2 from '../../../assets/images/home_slider_2.jpg';
import sliderBackground3 from '../../../assets/images/home_slider_3-1.png';
import sliderBackground4 from '../../../assets/images/home_slider_4-1.png';
import sliderBackground5 from '../../../assets/images/home_slider_5-1.png';

class CoverPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlider: 0
    };

    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(currentSlider) {
    this.setState({ currentSlider });
  }

  gosection() {
    $('html, body').animate({
      scrollTop: $('#case_study').offset().top
    }, 1000);
  }


  render() {
    const settings = {
      dots: true,
      dotsClass: CoverPageStyle['dots-cover'],
      infinite: false,
      draggable: false,
      afterChange: this.onSliderChange,
      autoplay: true,
      autoplaySpeed: 10000
    };

    const sliderBackgrounds = [
      sliderBackground1,
      sliderBackground2,
      sliderBackground3,
      sliderBackground4,
      sliderBackground5
    ];
    const sliderBackground = sliderBackgrounds[this.state.currentSlider];

    return (
      <div className={CoverPageStyle['c-cover-page']} style={{ backgroundImage: `url(${sliderBackground})` }}>
        <div className={CoverPageStyle['layer-cover']}>
          <MenuMobile />
          <Header />
          <div>
            <Slider {...settings}>
              <div>
                <h1>
                  Introducing Global Fishing Watch
                </h1>
                <p>Global Fishing Watch enables anyone with an Internet connection to see fishing
                  activity anywhere in the ocean in near real-time — for free.
                </p>
              </div>
              <div className={CoverPageStyle['leo-slider']}>
                <blockquote>
                  “Welcome to Global Fishing Watch, the world’s first free,
                  interactive tool that enables anyone in the world to track
                  commercial fishing activity, worldwide. Global Fishing Watch
                  will shed light on what is happening on our oceans so that
                  together, we can ensure the responsible and sustainable
                  management of our fisheries.”
                </blockquote>
                <p className={CoverPageStyle['author-quote']}>– Leonardo DiCaprio</p>
                <p>The Leonardo DiCaprio Foundation is Proud to be a Founding Funder of Global Fishing Watch</p>
              </div>
              <div>
                <h1>
                  Protect ocean ecosystems
                </h1>
                <p>
                  Monitor fishing activity in marine protected areas to ensure
                  proper management and oversight of these special places.
                </p>
              </div>
              <div>
                <h1>
                  See where fishing is happening
                </h1>
                <p>
                  Observe fishing patterns and activity based on vessel position, course and
                  speed as revealed by Automatic Identification System broadcasts.
                </p>
              </div>
              <div>
                <h1>
                  Improve fisheries management worldwide
                </h1>
                <p>
                  Provide tools for governments, fishery management organizations,
                  scientists, private industry, and NGOs to implement rules and
                  regulations that will ensure a sustainable and abundant ocean.
                </p>
              </div>
            </Slider>
            <div className={BoxTriangleStyle['c-box-triangle']} onClick={this.gosection}>
              <div className={BoxTriangleStyle['triangle-min']}></div>
            </div>
            <div className={CoverPageStyle['footer-header']}>
              <div>
                <img className={CoverPageStyle['ldf-logo']} src={LogoLDF} alt="logo"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoverPage;