import React, {Component} from 'react';
import LostsItem from "./LostsItem";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './losts.scss';
class Losts extends Component{
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
            <section className='losts-section container-fluid'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='losts-section-title text-uppercase'>All our <strong className='losts-section-title-strong'>lost</strong> pets</h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            this.state.losts.map((lost) => {
                                return(
                                    <LostsItem key={lost.id} lost={lost}/>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        );
    };
}
export default Losts;
