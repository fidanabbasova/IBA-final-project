import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
let activedFirstItem = true;
class NavbarItem extends Component{
    render() {
        const {name} = this.props;
        if(activedFirstItem) {
            activedFirstItem = false;
            return(
                <li className="nav-item ml-md-3 active">
                    <AnchorLink href={'#' + name.toLowerCase()} className="nav-link button">{name}</AnchorLink>
                </li>
            );
        }else {
            return(
                <li className="nav-item ml-md-3">
                    <AnchorLink href={'#' + name.toLowerCase()} className="nav-link button">{name}</AnchorLink>
                </li>
            );
        }
    }
}
export default NavbarItem;