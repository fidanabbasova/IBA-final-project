import React, {Component} from 'react';
import FoundsItem from "./FoundsItem";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './founds.scss';
class Founds extends Component{
    constructor(props) {
        super(props);
        this.state = {
            founds: []
        };
    }
    componentWillMount() {
        const getLosts = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
                .then(response => response.json())
                .then(json => {
                    this.setState({founds: json.filter((post) => post.statusId === "2")});
                });
        };
        getLosts(this.props);

    };
    render() {
        return(
            <section className='founds-section container-fluid'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='founds-section-title text-uppercase'>All our <strong className='founds-section-title-strong'>found</strong> pets</h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            this.state.founds.map((found) => {
                                return(
                                    <FoundsItem key={found.id} found={found}/>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        );
    };
}
export default Founds;
