import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Clase from './Components/Clase';

require('events').EventEmitter.prototype._maxListeners = 100;

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Switch>
   
    {/* <Route  exact path="/" component={Home}></Route> */}
    <Route  exact path="/" component={Clase}></Route>
    {/* <Route exact path="/clases/:id" component={Clase}></Route> */}
    </Switch>
    </BrowserRouter>
    
   {/* <Home/> */}
   </>
  );
}

export default App;
