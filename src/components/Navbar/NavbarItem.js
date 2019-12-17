import React, {Component} from 'react';
let activedFirstItem = true;

class NavbarItem extends Component{
    render() {
        const {name} = this.props;
        if(activedFirstItem) {
            activedFirstItem = false;
            return(
                <li className="nav-item ml-md-3 active">
                    <button className="nav-link button">{name}</button>
                </li>
            );
        }else {
            return(
                <li className="nav-item ml-md-3">
                    <button className="nav-link button">{name}</button>
                </li>
            );
        }
    }
}
export default NavbarItem;