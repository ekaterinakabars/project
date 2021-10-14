import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import { Header } from './components/Header';
import { Step2 } from './components/Step2';
import { Result } from './Result';
import { Step1 } from './Step1';
// import { Step3 } from './Step3';

function App() {
  return (<>
    <Header />
    <Router >
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route exact path='/step2' component={Step2} />
        {/* <Route exact path='/step3' component={Step3} /> */}
        <Route exact path='/result' component={Result} />

      </Switch>

    </Router>

  </>
  );
}

export default App;
