import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from './components/Navbar/Navbar';
import SignUpModal from "./components/Modals/SignUpModal";
import SignInModal from "./components/Modals/SignInModal";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Losts from "./components/Losts/Losts";
import Founds from "./components/Founds/Founds";
import Details from "./components/Details/Details";
function App() {
  return (
      <div>
          <Router>
              <SignInModal/>
              <SignUpModal/>
              <Headroom>
                  <Navbar/>
              </Headroom>
              <Switch>
                  <Route path="/" exact={true} component={Home}/>
                  <Route path="/losts/:id" component={Details}/>
                  <Route path="/founds/:id" component={Details}/>
                  <Route path="/losts/" component={Losts}/>
                  <Route path="/founds/" component={Founds}/>
              </Switch>
              <Footer/>
          </Router>
      </div>
  );
}
export default App;
