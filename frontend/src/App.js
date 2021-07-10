import LoginPage from "./Component/LoginPage/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Component/Signup/Signup";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
