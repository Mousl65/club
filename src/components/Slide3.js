import React from 'react'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import gym1 from '../image3/gym1.jpg';
import gym2 from '../image3/gym2.jpg';
import gym3 from '../image3/gym3.jpg';
import gym4 from '../image3/gym4.jpg';
import gym5 from '../image3/gym5.jpg';
import gym6 from '../image3/gym6.jpg';

const slideImages = [
    'image3/gym1.jpg',
    'image3/gym2.jpg',
    'image3/gym3.jpg',
    'image3/gym4.jpg',
    'image3/gym5.jpg',
    'image3/gym6.jpg',
]

const Slide3 = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={gym1 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={gym2 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={gym3 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={gym4 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={gym5 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={gym6 } alt="img1" />
            </div>
          </div>
          
          

          </Slide>
        </div>
      )
  }

export default Slide3;
    