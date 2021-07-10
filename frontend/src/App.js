import LoginPage from "./components/login.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Route exact path="/" render ={() => {
      return
    }}>
      <LoginPage />
    </Route>
    </>
  );
}

export default App;
