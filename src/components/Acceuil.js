import React from 'react';
import  Header from '../Header';

const Acceuil = () => {

        return (
 <div>
 <Header />

 <div className="global">
    <div className="container1">
     <div className="nom1">
       <h2>Historique du club</h2>
     </div>
    <div className="prenom">
     <p>Notre club est fondé en 2010 par des cadres de sports de la direction provinciale du misistére de la jeunesse et du sport à kenitra.<br></br>
       au début nos activitées sportives étaient orientées vers l'organisation des évennements sportives à l'occasion de la commemoration des fétes nationnaux,<br></br>
       comme la journées mondiale de la femme la fete de l'independance...<br></br>
       au fil des ans nous avons developper plusieurs projet sportves à savoir la creation des écoles de Football,de gymnastique...</p>
    </div>
  </div>
    <div className="container2">
      <div className="nom1">
         <h2>Présentation du club</h2>
      </div>
    <div className="prenom"> 
    <p>Nous encadrant dans notre club des enfants de divers age dans plusieurs disciplines sportive ,Football,gymnastique.<br></br>
    nous disposant d'un staf technique compétent et un materiéls pedagogique adéqua.<br></br>
    nos activitées se déroulent dans la salle couverte Oulad Mbarak et le csp Mly El Hassan à Haouzia à kenitra.</p>
    </div>
   </div>
  </div>
 <h2>Localisation</h2>
    <br></br>
    <div className="info">
       <h2>Informations pratiques divers</h2>
    </div>
    
    <br></br>
    <div className='global2'>
<div className="horaire">
    
    <table className="table">
    <thead>
    <div className="titre">
    <tr>
      <h3>Horaires </h3>
      </tr>
    </div>
    <tr>
    
      <th scope="col">Disciplines</th>
      <th scope="col">Jours</th>
      <th scope="col">Heures</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-success">
      <th scope="row">Football</th>
      <td>Samedi</td>
      <td>13h à 17h</td>
     
    </tr>
    <tr className="table-success">
      <th scope="row"></th>
      <td>Dimanche</td>
      <td>10h à 14h</td>
      
    </tr>
    <tr className="table-warning">
      <th scope="row">Gymnastique</th>
      <td>Samedi</td>
      <td>10h à 14h</td>
      
    </tr>
    <tr className="table-warning">
      <th scope="row"></th>
      <td>Dimanche</td>
      <td>10h à 14h</td>
      
    </tr>
  </tbody>
</table>
</div>
<div className='Tarif'> 
<table className="table table-dark tarif">
<thead>
<div className="titre">
<h3>Tarifs</h3>
</div>
 </thead>
 <thead>
  <tr>
      
     <th scope="col"></th>
     <th scope="col">Adhesion</th>
     <th scope="col">Mensualité</th>
</tr>
</thead>
<tbody>
<tr>
 <th scope="row">Football</th>
  <td colspan="1" className="table-active">50 dh</td>
  <td colspan="1" className="table-active">100 dh</td>
</tr>
  
  <tr>
    <th scope="row">Gymnastique</th>
    <td colspan="1" className="table-active">100 dh</td>
    <td colspan="1" className="table-active">100 dh</td>
    
 </tr>
</tbody>
</table>

</div>
</div>
  <br></br>
  <div className='facebook'>
   <h2>Notre page facebook</h2></div>
   <div className="socialNetwork">
      <a href="https://web.facebook.com/KAC-Sport-pour-Tous-1538473449710613"target="_blank"
       rel="noopener noreferrer">
       <i className="fab fa-facebook"> Facebook</i>
           
           
      </a>
     </div>
   </div>
    )
}

export default Acceuil