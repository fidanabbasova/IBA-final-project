import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import LostAll from "./LostAll";
import LostDogs from "./LostDogs";
import LostCats from "./LostCats";
import LostOthers from "./LostOther";
import CreateFoundPost from "./CreateFoundPost";
import './losts.scss';
class Losts extends Component{
    render() {
        return(
            <Router className="losts-page">
                <div className="losts-filter">
                    <Link to="/losts/"><i className="fas fa-paw" data-toggle="tooltip" data-placement="left" title="All"></i></Link>
                    <Link to="/losts/dogs"><i className="fas fa-dog" data-toggle="tooltip" data-placement="left" title="Dogs"></i></Link>
                    <Link to="/losts/cats"><i className="fas fa-cat" data-toggle="tooltip" data-placement="left" title="Cats"></i></Link>
                    <Link to="/losts/others"><i className="fas fa-otter" data-toggle="tooltip" data-placement="left" title="Others"></i></Link>
                </div>
                <CreateFoundPost/>
                <div className='losts-section container-fluid'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='losts-section-title text-uppercase'>Our <strong className='losts-section-title-strong'>lost</strong> pets</h2>
                            </div>
                            <div className="col-md-12">
                                <button className='losts-button' type="button" data-toggle="modal" data-target="#createFoundPost">
                                    <i className="fas fa-paw"></i> Create post for found pet
                                </button>
                            </div>
                        </div>
                        <Switch>
                            <Route path="/losts/" exact={true}>
                                <LostAll/>
                            </Route>
                            <Route path="/losts/dogs">
                                <LostDogs/>
                            </Route>
                            <Route path="/losts/cats">
                                <LostCats/>
                            </Route>
                            <Route path="/losts/others">
                                <LostOthers/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    };
}
export default Losts;
