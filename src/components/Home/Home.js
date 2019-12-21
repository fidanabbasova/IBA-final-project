import React, {Component} from 'react';
import Header from "./Header/Header";
import Posts from "./Post/Posts";
import Contact from "./Contact/Contact";

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header/>
                <Posts statusId={'1'} title={'found'}/>
                <Posts statusId={'2'} title={'lost'}/>
                <Contact/>
            </div>
        );
    }
}
export default Home;