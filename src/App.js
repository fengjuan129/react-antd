import React from 'react';
import './App.css';
import Login from './view/login/login';
import Home from './view/home/home';
import {BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <HashRouter >
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Home" component={Home}/>
        </Switch>
     </HashRouter>
    
    </div>
  );
}

export default App;
