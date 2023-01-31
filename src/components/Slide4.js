import React from 'react'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import actualite1 from '../image6/actualite1.jpg';
import actualite2 from '../image6/actualite2.jpg';
import actualite3 from '../image6/actualite3.jpg';
import actualite4 from '../image6/actualite4.jpg';
import actualite5 from '../image6/actualite5.jpg';

const slideImages =[]

function Slide4() {

  return (
 <div className="slide-container2">
    <Slide>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={actualite1 } alt="img1" />
       </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={actualite2 } alt="img1" />
      </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={actualite3 } alt="img1" />
      </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={actualite4 } alt="img1" />
      </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={actualite5 } alt="img1" />
      </div>
      </div>
    </Slide>

 </div>
  )
}

export default Slide4
