import React, {Component} from "react";
let activedFirstItem = true;
class CarouselTarget extends Component {
    render() {
        const {dataId} = this.props;
        if(activedFirstItem) {
            activedFirstItem = false;
            return(
                <li data-target="#home" data-slide-to={dataId} className="active"></li>
            );
        }else {
            return(
                <li data-target="#home" data-slide-to={dataId}></li>
            );
        }
    }
}
export default CarouselTarget;