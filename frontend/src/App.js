import LoginPage from "./Component/LoginPage/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Component/Signup/Signup";
import Navbar from "./Component/Navbar/Navbar";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/admin/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/meet/:id" component={Meetpage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
