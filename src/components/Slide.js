import React from 'react'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import salle from '../image/salle.jpg';
import salle1 from '../image/salle1.jpg';
import salle2 from '../image/salle2.jpg';
import salle3 from '../image/salle3.jpg';
import salle4 from '../image/salle4.jpg';
import salle5 from '../image/salle5.jpg';
import salle6 from '../image/salle6.jpg';
import salle7 from '../image/salle7.jpg';
import salle8 from '../image/salle8.jpg';
import salle9 from '../image/salle9.jpg';
import salle10 from '../image/salle10.jpg';
import salle11 from '../image/salle11.jpg';
import salle12 from '../image/salle12.jpg';
import salle13 from '../image/salle13.jpg';
import salle14 from '../image/salle14.jpg';
import salle15 from '../image/salle15.jpg';



const slideImages = [
    'image/salle.jpg',
    'image/salle1.jpg',
    'image/salle2.jpg',
    'image/salle3.jpg',
    'image/salle4.jpg',
    'image/salle5.jpg',
    'image/salle6.jpg',
    'image/salle7.jpg',
    'image/salle8.jpg',
    'image/salle9.jpg',
    'image/salle10.jpg',
    'image/salle11.jpg',
    'image/salle12.jpg',
    'image/salle13.jpg',
    'image/salle14.jpg',
    'image/salle15.jpg',
   
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <img src={salle } alt="img1" />
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={salle1 } alt="img2" />
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={salle2 } alt="img3" />
              </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={salle3 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={salle4 } alt="img1" />
          </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <img src={salle5 } alt="img1" />
        </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
        <img src={salle6 } alt="img1" />
      </div>
    </div>
    <div className="each-slide">
    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
      <img src={salle7 } alt="img1" />
    </div>
  </div>
  <div className="each-slide">
  <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
    <img src={salle8 } alt="img1" />
  </div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle9 } alt="img1" />
</div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle10 } alt="img1" />
</div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle11 } alt="img1" />
</div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle12 } alt="img1" />
</div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle13 } alt="img1" />
</div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle14 } alt="img1" />
</div>
</div>
<div className="each-slide">
<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
  <img src={salle15 } alt="img1" />
</div>
</div>


          </Slide>
        </div>
      )
  }

export default Slideshow
