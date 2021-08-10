import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Display from './components/Display';
import History from "./components/History";

function App() {

  
  return (
    
   
   
      
       <BrowserRouter>
        <div className="App">
      <Switch>
      <Route exact path="/" component={Display} />
      <Route exact path="/history" component={History}/>
      </Switch>
      </div>
      </BrowserRouter>
   
    
  );
}

export default App;
