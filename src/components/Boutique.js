import React from 'react'
import tenue from './image5/tenue.jpg';
import ButtonsBottom from '../components/ButtonsBottom';

function Boutique() {
  return (
    <div className='tenu'>
     <h3>Tenue du club saison sportive 2022-2023</h3>
     <img src= {tenue} alt='image'/>

     <ButtonsBottom   right={'/'}  left={'/contact'}  />
    </div>
  )
}

export default Boutique