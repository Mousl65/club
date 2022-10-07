import React from 'react'
import Slideshow from './Slide';
import Slide2 from './Slide2';

const Football = () => {
    return (
<div className="container">
        <div className="titre1">
           <h2>Ecole de football au centre socio-sportif Mly El Hassan a Haouzia Kenitra</h2>
           <h3>Date de creation 2011</h3></div> 
       <div className='csp-container'>
           <div className="titre"> 
              <h5>Photos des séances d'entrainements et des évennements sportifs   </h5> 
           </div> 
            <div className='ecole1'> 
                 <Slide2 />
            </div>
        </div>
       <div className="titre2">
           <h2>Ecole de football à la salle couverte Oulade Mbarak kenitra</h2>
           <h3>Date de création 2016</h3></div>
      <div className="salle">
           <div className="titre"> 
           <h5>Photos des séances d'entrainements et des évennements sportifs</h5></div>
         
         <div className='ecole1'> 
              <Slideshow />
               
            </div>
      </div>

      <br></br>
      <div className='facebook'>
      <h5>Pour voir plus de photos consultez notre page facebook</h5></div>
      <div className="socialNetwork">
         <a href="https://web.facebook.com/KAC-Sport-pour-Tous-1538473449710613"target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-facebook"> Facebook</i>
              
              
         </a>
        </div>
 </div>
 

       
    )
}

export default Football
