import React from 'react';
import './App.css';
import Login from './view/login/login';
import index from './view/index';
import {BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
        <Switch>
            <Route exact path="/" component={index}/>
            <Route exact path="/Login" component={Login}/>
        </Switch>
     
    
    </div>
  );
}

export default App;
