import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import { Header } from './components/Header';
import { Result } from './components/Result';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';


function App() {
  return (<>
    <Router basename='/project'>

      <Header />

      <Switch>
        <Route exact path="/" component={Step1} />
        <Route exact path='/step2' component={Step2} />
        <Route exact path='/result' component={Result} />
      </Switch>



    </Router>


  </>


  );
}

export default App;
