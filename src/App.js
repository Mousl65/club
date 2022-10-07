import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Menu from './components/Menu';
import Acceuil from   './components/Acceuil';
import Football from './components/Football';
import  Gymnastique from './components/Gymnastique';
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
       <Route path="/football" component={Football} />
       <Route path="/gymnastique" component={Gymnastique} />
       <Route strict component= {ErrorPage} />
   </Switch>
 
        <Footer />
    
        </BrowserRouter>
  );
}

export default App;
