import LoginPage from "./Component/LoginPage/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Component/Signup/Signup.js'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={LoginPage}/>
      </Switch>
      <Switch>
        <Route path="/" component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
