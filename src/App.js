import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Menu from './components/Menu';
import Acceuil from   './components/Acceuil';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Matchs from './components/Matchs';
import Boutique from './components/Boutique'

import  Gymnastique from './components/Gymnastique';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer';
import "./App.css"
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  return (
    <BrowserRouter>
    <Menu />

  <Switch>
       <Route exact path="/" component={Acceuil} />
       <Route path="/photos" component={Photos} />
       <Route path="/videos" component={Videos} />
       <Route path="/matchs" component={Matchs} />
      
       <Route path="/gymnastique" component={Gymnastique} />
       <Route path="/contact" component={Contact} />
       <Route path="/boutique" component={Boutique} />
       <Route strict component= {ErrorPage} />
   </Switch>
 
        <Footer />
    
        </BrowserRouter>
  );
}

export default App;
