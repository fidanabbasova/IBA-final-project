import React, {Component} from 'react';
import CarouselItem from "./CarouselItem";
import CarouselTarget from "./CarouselTarget";
import './header.scss';

function importAll(r) {
    return r.keys().map(r);
}
class Header extends Component{
    render() {
        const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));
        let carouselItems = [];
        for (let i=0; i<images.length; i++) {
            carouselItems.push({id: i, name: images[i]});
        }
        return(
            <header id="demo" className="header carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    {
                        carouselItems.map((item) => {
                            return(
                                <CarouselTarget key={item.id}/>
                            );
                        })
                    }
                </ul>
                <div className="carousel-inner">
                    <div className="dark-bg">
                        <h1 className='header-content'>
                            <strong className='bold-text'>Adopt</strong> me or<br/>
                            help me <strong className='bold-text'>find</strong><br/>
                            my <strong className='bold-text'>home.</strong>
                        </h1>
                    </div>
                    {
                        carouselItems.map((item) => {
                            return(
                                <CarouselItem key={item.id} dataId={item.id} name={item.name}/>
                            );
                        })
                    }
                </div>
                <a className="carousel-control carousel-control-prev" href="#demo" data-slide="prev">
                    <i className="carousel-control-item carousel-control-item-left fas fa-arrow-left fa-3x"></i>
                </a>
                <a className="carousel-control carousel-control-next" href="#demo" data-slide="next">
                    <i className="carousel-control-item carousel-control-item-right fas fa-arrow-right fa-3x"></i>
                </a>
            </header>
        );
    }
}
export default Header;