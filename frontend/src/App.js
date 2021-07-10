import LoginPage from "./components/login.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Component'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {/* <Route
          exact
          path="/"
          render={() => {
            return;
          }}
        >
          <LoginPage />
        </Route> */}
        <Route path="/" component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default App;
