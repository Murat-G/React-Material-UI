import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SignIn from '../pages/SignIn';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import ForgotPassword from '../pages/ForgotPassword'

function AppRouter() {

  return (
    <Router>
      <HeaderBar/>
      <Switch>
        <Route exact path="/React-Material-UI/forgotpasword" component={ForgotPassword}/>
        <Route exact path="/React-Material-UI/login" component={SignIn} />
        <Route exact path="/React-Material-UI/register" component={SignUp} />
        <Route exact path="/React-Material-UI/contact" component={Contact}/>
        <Route exact path="/React-Material-UI/about" component={About}/>
        <Route path="/React-Material-UI" component={Home} />
      </Switch>
      <FooterBar/>
    </Router>
  );
}

export default AppRouter;