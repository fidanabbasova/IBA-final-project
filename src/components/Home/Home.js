import React, {Component} from 'react';
import Header from "./Header/Header";
import Posts from "./Post/Posts";

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header/>
                <Posts statusId={'1'} title={'found'}/>
                <Posts statusId={'2'} title={'lost'}/>
            </div>
        );
    }
}
export default Home;