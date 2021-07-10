import LoginPage from "./components/login.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Component'
import Signup from './Component/Signup/Signup.js'

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
