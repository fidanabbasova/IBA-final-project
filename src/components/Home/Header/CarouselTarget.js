import React, {Component} from "react";
class CarouselTarget extends Component {
    render() {
        const {dataId, activedFirstItem} = this.props;
        if(activedFirstItem === 1) {
            return(
                <li data-target="#home" data-slide-to={dataId} className="carousel-indicators-list active">
                    <i className="fas fa-paw carousel-indicators-icon"></i>
                </li>
            );
        }else {
            console.log("dkfljsf");

            return(
                <li data-target="#home" data-slide-to={dataId} className="carousel-indicators-list">
                    <i className="fas fa-paw carousel-indicators-icon"></i>
                </li>
            );
        }
    }
}
export default CarouselTarget;