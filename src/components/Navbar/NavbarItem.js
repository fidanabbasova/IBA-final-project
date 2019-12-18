import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
let activedFirstItem = true;
class NavbarItem extends Component{
    render() {
        const {name} = this.props;
        if(activedFirstItem) {
            activedFirstItem = false;
            return(
                <Router>
                    <li className="nav-item ml-md-3 active">
                        <Link to={'/' + name.toLowerCase()} className="nav-link button">{name}</Link>
                    </li>
                </Router>
            );
        }else {
            return(
                <Router>
                    <li className="nav-item ml-md-3">
                        <Link to={'/' + name.toLowerCase()} className="nav-link button">{name}</Link>
                    </li>
                </Router>
            );
        }
    }
}
export default NavbarItem;