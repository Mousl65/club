import React from 'react';
import Slide3 from './Slide3';


const Gymnastique = () => {
    return (
        <div className="container">
        <div className="titre1">
        <h2>Ecole de gymnastique au centre socio-sportif Mly El Hassan a Haouzia Kenitra</h2>
        <h3>Date de creation 2011</h3></div>
        <div className='csp-container'> 
        <div className='ecole1'> 
                 <Slide3 />
            </div>
            <div className="titre"> 
            <h5>Photos des séances d'entrainements et des évennements sportifs   </h5> 
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

export default Gymnastique;
