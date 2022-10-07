import React from 'react'
import logos from './logos.png' 
import TextAnimer from './components/TextAnimer'
const Header = () => {
    return (
    
     <div className="entete">
           <img className="logo" src = {logos} alt = ""/>
       <h1>Bienvenue sur le site de Kenitra Athletique Club Sport pour Tous</h1>
      
       <h2>   <TextAnimer /> </h2>
     </div>
     
    )
}

export default  Header
