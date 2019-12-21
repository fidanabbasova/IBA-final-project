import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import FoundAll from "./FoundAll";
import FoundDogs from "./FoundDogs";
import FoundCats from "./FoundCats";
import FoundOthers from "./FoundOther";
import CreateLostPost from "./CreateLostPost";
import './founds.scss';
class Founds extends Component{
    render() {
        return(
            <Router className="founds-page">
                <div className="founds-filter">
                    <Link to="/founds/"><i className="fas fa-paw" data-toggle="tooltip" data-placement="left" title="All"></i></Link>
                    <Link to="/founds/dogs"><i className="fas fa-dog" data-toggle="tooltip" data-placement="left" title="Dogs"></i></Link>
                    <Link to="/founds/cats"><i className="fas fa-cat" data-toggle="tooltip" data-placement="left" title="Cats"></i></Link>
                    <Link to="/founds/others"><i className="fas fa-otter" data-toggle="tooltip" data-placement="left" title="Others"></i></Link>
                </div>
                <CreateLostPost/>
                <div className='founds-section container-fluid'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='founds-section-title text-uppercase'>All our <strong className='founds-section-title-strong'>found</strong> pets</h2>
                            </div>
                            <div className="col-md-12">
                                <button className='founds-button'type="button" data-toggle="modal" data-target="#createLostPost">
                                    <i className="fas fa-paw"></i> Create post for your found pet
                                </button>
                            </div>
                        </div>
                        <Switch>
                            <Route path="/founds/" exact={true}>
                                <FoundAll/>
                            </Route>
                            <Route path="/founds/dogs">
                                <FoundDogs/>
                            </Route>
                            <Route path="/founds/cats">
                                <FoundCats/>
                            </Route>
                            <Route path="/founds/others">
                                <FoundOthers/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    };
}
export default Founds;