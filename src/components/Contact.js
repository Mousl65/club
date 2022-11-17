import React, {useState} from 'react';
import { db } from '../firebase'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Contact() {

const [Nom, setNom]= useState("");
const [Prenom, setPrenom]= useState("");
const [Birtday, setBirtday]= useState("");
const [Telephone, setTelephone]= useState("");
const [Adresse, setAdresse]= useState("");
const [email,setEmail]= useState("");
const [message,setMessage]= useState("");
const [discipline,setDiscipline]= useState("");
const [fichier, setFichier]= useState("");

const handleSubmit =(e)=>{
    e.preventDefault ();
    db.collection("contact").add({
      Nom,Prenom,Birtday,Telephone,Adresse,email,message,
      discipline,fichier
    })
    .then(()=>{alert('Message envoyé');} )
    .catch((error)=>{alert(error.message);});

    setNom("");
    setPrenom("");
    setBirtday("");
    setTelephone("");
    setAdresse("");
    setEmail("");
    setMessage("");
    setDiscipline("");
    setFichier("");
};

  return (
<form onSubmit={handleSubmit} className='form1'>
      <div className='formulaire'>
          <h2>Formulaire d'inscription</h2>
          </div>
  <InputGroup className="mb-2 mt-2 w-50 p-2   ">
  <InputGroup.Text  type='nom'>Nom</InputGroup.Text> 
  <Form.Control onChange={e=>setNom(e.target.value)}
  value={Nom}  ></Form.Control> 
</InputGroup>
<InputGroup className="mb-2 mt-2 w-50 p-2">
  <InputGroup.Text 
  type='Prenom'>Prenom</InputGroup.Text>
  <Form.Control onChange={e=>setPrenom(e.target.value)}
  value={Prenom} aria-label="Prenom" />
</InputGroup>
<Form.Group className="mb-2 mt-2 w-50 p-2">
          
          <Form.Control onChange={e=>setBirtday(e.target.value)} 
          type="Birtday" value={Birtday} placeholder="Entez votre date de naissance" />
        </Form.Group>
        <Form.Group className="mb-2 mt-2 w-50 p-2">
          
          <Form.Control onChange={e=>setTelephone(e.target.value)} 
          type="Phone Number" value={Telephone} placeholder="Entez votre numéro de téléphone" />
        </Form.Group>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Entrez votre adresse"
        className="mb-2 mt-2 w-50 p-2"
      >
        <Form.Control onChange={e=>setAdresse(e.target.value)}
         as="textarea" value={Adresse} placeholder="Leave a comment here" />
      </FloatingLabel>
    <FloatingLabel
      controlId="floatingInput"
      label="Email address"
      className="mb-2 mt-2 w-50 p-2 " 
    >
      <Form.Control onChange={e=>setEmail(e.target.value)}
       type="email" value={email} placeholder="name@example.com" />
    </FloatingLabel>
    
   
    <Form.Group className="mb-2 mt-2 w-50 p-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control onChange={e=>setMessage(e.target.value)}
         as="textarea" value={message} rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-2 mt-2 w-50 p-2">
        <Form.Label>Saisir un fichier</Form.Label>
        <Form.Control type="file" />
        </Form.Group>
        <Form.Select className=' p-2 m-2 mb-2 mt-2 w-50' onChange={e=>setMessage(e.target.value)}
        value={discipline} aria-label="Default select example">
        <option>Choisir une discipline sportive</option>
        <option value="1">Football</option>
        <option value="2">Gymnastique</option>
        
      </Form.Select>
     
    <Form.Group className="mb-3 p-1">
    <Form.Check
      required
      label="Accepte les termes et conditions"
      feedback="You must agree before submitting."
      feedbackType="invalid"
    />
  </Form.Group>
  <Button className='P-2 m-2  mb-2 ' type="submit">Envoyez</Button>
  </form>
);
}
  

export default Contact;