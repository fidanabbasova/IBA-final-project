import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './losts.scss';
import LostItem from "./LostItem";
class LostAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            losts: []
        };
    }
    componentWillMount() {
        const getLosts = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
                .then(response => response.json())
                .then(json => {
                    this.setState({losts: json.filter((post) => post.statusId === "1")});
                });
        };
        getLosts(this.props);
    };
    render() {
        return(
            <div className='row'>
                {
                    this.state.losts.map((lost) => {
                        return(
                            <LostItem key={lost.id} lost={lost}/>
                        );
                    })
                }
            </div>
        );
    }
}
export default  LostAll;
