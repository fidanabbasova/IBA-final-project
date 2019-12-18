import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Posts from "./components/Post/Posts";
import SignUpModal from "./components/Modals/SignUpModal";
import SignInModal from "./components/Modals/SignInModal";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Posts statusId={1} title={'found'}/>
        <Posts statusId={2} title={'lost'}/>
        <SignUpModal/>
        <SignInModal/>
    </div>
  );
}
export default App;
