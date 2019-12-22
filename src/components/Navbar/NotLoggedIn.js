import React, {Component} from 'react';
class NotLoggedIn extends Component {
    render() {
        return (
            <ul className="sign-buttons-container nav navbar-nav ml-auto">
                <li className="nav-item">
                    <button className="nav-link sign-btn sign-up-btn" type="button" data-toggle="modal" data-target="#signUpModal"><span className="fas fa-user"></span> Sign up</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link sign-btn sign-in-btn" type="button" data-toggle="modal" data-target="#signInModal"><span className="fas fa-sign-in-alt"></span> Sign in</button>
                </li>
            </ul>

        );
    }
}
export default NotLoggedIn;