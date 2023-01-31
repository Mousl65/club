import React from 'react';
import match1 from './image5/match1.jpg';
import match2 from './image5/match2.jpg';
import match3 from './image5/match3.jpg';
import match4 from './image5/match4.jpg';
import ReactPlayer from 'react-player';

function Matchs() {
     const matchv ='https://www.facebook.com/100063700974241/videos/5766878316733973'
  return (
    <div className='tapi'>
    <div className='match'>
      <div className='match1'>
          <img src={match1} alt='match1' />
         
          <div className='tournoi'>
             <h4>Participation au tournoi de football au csp Mly El Hassan kenitra le 06/11/2022</h4>
          </div>
     </div>
     
     <div className='match3'>
          <img src={match3} alt='match3' />
          <div className='doha'>
              <h4>Match amicale avec l'association USAK de kenitra au centre Doha Mehdia le dimanche 04/12/2022</h4>
          </div>
     </div>
    
   
   <div className='voir'>
    
     <ReactPlayer  className='videoPlayer' 
     url={matchv} controls width='400px' height='230px'
             
     />
     
     <div className='salleCouverte'>
     <h4>Match amical entre les deux écoles de footballe du club kac Sport
     csp haouzia et salle couverte oulad mbarak</h4>
 </div>
 </div>
     </div>
     <div className='facebook'> 
    <h5>Pour voir plus de videos et photos consultez notre page facebook</h5></div>
    <div className="socialNetwork">
       <a href="https://web.facebook.com/KAC-Sport-pour-Tous-1538473449710613"target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-facebook"> Facebook</i>
            
            
       </a>
     </div>
    </div>
  )
}

export default Matchs