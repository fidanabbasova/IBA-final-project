import React, {Component} from 'react';
import image from './img/background.png';
import video from './video/video.mp4';
import './adopt.scss'
class Adopt extends Component {
    render() {
        return(
            <section>
                <div className="video-bg-container">
                    <video autoPlay loop muted className="video-bg">
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                <div id="adopt" className="adopt-section">
                    <div className="adopt-bg" style={{ backgroundImage: "url("+ image +")"}}></div>
                    <section className="adopt-content">
                        <h2 className="adopt-title">Adopt me</h2>
                        <p className="adopt-slogan">You are the answer to providing homeless pets a second chance.</p>
                        <p className="adopt-slogan">Adopt and offer deserving pets a bright future.</p>
                        <p className="adopt-slogan">You won't change the world by saving an animal. But you will change that animal's world.</p>
                        {/*<p className="adopt-slogan">Comming soon...</p>*/}
                    </section>
                </div>
            </section>
        );
    }
}
export default Adopt;