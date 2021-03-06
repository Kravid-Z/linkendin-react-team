import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./Pages/ProfilePage";
import OtherProfile from "./Pages/OtherProfile"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FooTer from "./Components/FooTer";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route
        path = "/"
        exact
        render = {
            (routeProps) => < Homepage {
              ...routeProps
            }
            />} />
      <Route
        path="/profile/me"
        exact
        render={(routeProps) => <ProfilePage {...routeProps} />}
      />
      <Route path='/profile/:userId' render={(routeProps) => <OtherProfile {...routeProps} />} />
      </Switch>
      <FooTer />
    </Router>
  );
}

export default App;
