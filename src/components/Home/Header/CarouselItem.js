import React, {Component} from 'react';
class CarouselItem extends Component{
    render() {
        const {name, activedFirstItem} = this.props;
        if(activedFirstItem === 1) {
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