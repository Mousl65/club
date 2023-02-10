import React from 'react';
import ReactPlayer from 'react-player'
import ButtonsBottom from '../components/ButtonsBottom'

function Videos() {
  const kac1='https://www.facebook.com/100063700974241/videos/2162342967409034/'
  const kac2='https://www.facebook.com/100063700974241/videos/2328378327382085/';
  const kac3 = 'https://www.facebook.com/100063700974241/videos/361306731117458/';
  const kac4='https://www.facebook.com/100063700974241/videos/2523726687851946/';
  const kac5= 'https://www.facebook.com/100063700974241/videos/1103362483200081/'
  return (
    <div className='planc'> 
 <div className='video'>
   
    <ReactPlayer  
  url={kac1} controls
        width='250px' height='150px'
  />
  <ReactPlayer  
  url={kac2} controls
        width='250px' height='150px'
  />
  <ReactPlayer  
  url={kac3} controls
        width='250px' height='150px'
  />
  <ReactPlayer  
  url={kac4} controls
        width='250px' height='150px'
  />
   
  <ReactPlayer  
  url={kac5} controls
        width='250px' height='150px'
  />
  </div> 
  <ButtonsBottom   right={'/matchs'}  left={'photos'}  />
    
    <div className='facebook'> 
    <h5>Pour voir plus de videos consultez notre page facebook</h5></div>
    <div className="socialNetwork">
       <a href="https://web.facebook.com/KAC-Sport-pour-Tous-1538473449710613"target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-facebook"> Facebook</i>
            
            
       </a>
       </div>
    </div> 
  )
}

export default Videos