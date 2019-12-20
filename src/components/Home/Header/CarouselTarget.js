import React, {Component} from "react";
import icon from './icon.png'
let activedFirstItem = true;
class CarouselTarget extends Component {
    render() {
        const {dataId} = this.props;
        console.log(dataId);
        if(activedFirstItem) {
            activedFirstItem = false;
            return(
                <li data-target="#home" data-slide-to={dataId} className="carousel-indicators-list active">
                    <i className="fas fa-paw carousel-indicators-icon"></i>
                </li>
            );
        }else {
            return(
                <li data-target="#home" data-slide-to={dataId} className="carousel-indicators-list">
                    <i className="fas fa-paw carousel-indicators-icon"></i>
                </li>
            );
        }
    }
}
export default CarouselTarget;