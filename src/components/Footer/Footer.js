import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'
import logo from "./img/logo-text.png";
class Footer extends Component {
    render() {
        return(
            <footer className="footer container-fluid">
                <div className="container">
                    <div className="row footer-section">
                        <div className="col-md-8">
                            <div className="row footer-container">
                                <div className="col-sm-4">
                                    <Link to="/">
                                        <img src={logo} alt="" className="footer-logo col-12"/>
                                    </Link>
                                </div>
                                <div className="col-sm-8 footer-icon-container">
                                    <Link to="/"><i className="footer-icon fab fa-facebook-f"></i></Link>
                                    <Link to="/"><i className="footer-icon fab fa-instagram"></i></Link>
                                    <Link to="/"><i className="footer-icon fab fa-twitter"></i></Link>
                                    <Link to="/"><i className="footer-icon fab fa-youtube"></i></Link>
                                    <Link to="/"><i className="footer-icon fas fa-envelope"></i></Link>
                                </div>
                            </div>
                        </div>
                        <ul className="footer-nav nav col-md-4">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/losts" className="nav-link">Lost pets</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/founds" className="nav-link">Found pets</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;