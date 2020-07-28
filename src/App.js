import React from 'react';
import Home from './component/Home'
import CardPayment from "./component/CardPayment"
import Success from "./component/Success"
import {Route} from 'react-router-dom'

function App(props) {
  return (
    <React.Fragment>
        <Route path="/success" render={(props)=><Success  {...props} ></Success>}/>
        <Route path="/" exact render={(props)=><Home  {...props} ></Home>}/>
        <Route path="/card" render={(props)=><CardPayment {...props}></CardPayment>}/>
      </React.Fragment>
  );
}

export default App;
