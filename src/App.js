import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Posts from "./components/Post/Posts";
import SignUpModal from "./components/Modals/SignUpModal";
import SignInModal from "./components/Modals/SignInModal";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={Navbar}/>
          </Switch>
      </Router>

        // <Headroom>
        //     <Navbar/>
        // </Headroom>
        // <Header/>
        // {/*<Posts statusId={'1'}title={'found'}/>*/}
        // {/*<Posts statusId={'2'} title={'lost'}/>*/}
        // {/*<SignUpModal/>*/}
        // {/*<SignInModal/>*/}
  );
}
export default App;
