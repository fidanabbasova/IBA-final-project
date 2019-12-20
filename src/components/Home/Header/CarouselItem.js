import React, {Component} from 'react';
let activedFirstItem = true;
class CarouselItem extends Component{
    render() {
        const {name} = this.props;
        if(activedFirstItem) {
            activedFirstItem = false;
            return(
                <div className="carousel-item active">
                    <img src={name} className='carousel-img'/>
                </div>
            );
        }else {
            return(
                <div className="carousel-item">
                    <img src={name} className="carousel-img"/>
                </div>
            );
        }
    }
}
export default CarouselItem;