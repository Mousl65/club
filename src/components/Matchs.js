import React from 'react';
import match1 from './image5/match1.jpg';
import match2 from './image5/match2.jpg'
import match3 from './image5/match3.jpg'
import match4 from './image5/match4.jpg'


function Matchs() {
  return (
    <div className='tapi'>
    <div className='match'>
      <div className='match1'>
          <img src={match1} alt='match1' />
          <div className='tournoi'>
             <h4>Participation au tournoi de football au csp Mly El Hassan kenitra le 06/11/2022</h4>
          </div>
     </div>
      <div className='match2'>
          <img src={match2} alt='match2' />
     </div>
     <div className='match3'>
          <img src={match3} alt='match3' />
          <div className='doha'>
              <h4>Match amicale avec l'association USAK de kenitra au centre Doha Mehdia le dimanche 04/12/2022</h4>
          </div>
     </div>
     <div className='match4'>
          <img src={match4} alt='match4' />
     </div>
   

     </div>
    </div>
  )
}

export default Matchs