import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="body">
       <NavBar />

        <Switch>
            <Route exact path="/" component={Home}  />
       </Switch>
    </div>
  );
}

export default App;
