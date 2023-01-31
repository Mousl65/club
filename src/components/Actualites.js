import React from 'react'
import Slideshow from './Slide';
import Slide4 from './Slide4';

function Actualites() {
  return (
    <div className='publication'>
       <h1>Actualités</h1>
       <div className='tournoi2'> 
       <h4>Tournoi de football dans la salle couverte<br></br>oulade
       mbarak le jeudi 26/01/2023<br></br>
       Equipes participante:<br></br>
       1- club KAC SPT ecole de csp haouzia<br></br>
          et ecole de la salle couverte<br></br>
         2- Association haouzia<br></br>
         3- Association de sidi kacem</h4></div>

        <div className='slide4'> <Slide4 /></div>
    </div>
  )
}

export default Actualites;