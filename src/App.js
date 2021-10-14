import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import { Header } from './components/Header';
import { Step2 } from './components/Step2';
import { Step1 } from './Step1';



const Step3 = () => <> step3</>
const Result = () => <> result</>

function App() {
  return (<>
    <Header />
    <Router >
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route exact path='/step2' component={Step2} />
        <Route exact path='/step3' component={Step3} />
        <Route exact path='/result' component={Result} />

      </Switch>

    </Router>

  </>
  );
}

export default App;
