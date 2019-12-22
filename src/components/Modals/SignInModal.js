import React, {Component} from "react";
import './signInModal.scss'
class SignInModal extends Component {
    render() {
        return(
            <div className="modal sign-in-modal fade" id="signInModal" tabIndex="-1" role="dialog"
                 aria-labelledby="signInModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title col-md-10 offset-md-1 text-center"><i className="fas fa-paw"></i> Sign In</div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="close-icon"><i className="fas fa-times"></i></span>
                            </button>
                        </div>
                        <div className="modal-body col-md-10 offset-md-1">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder='Enter your password'/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer col-md-10 offset-md-1">
                            <button type="button" className="modal-button cancel-btn" data-dismiss="modal"><i className="fas fa-times"></i> Close</button>
                            <button type="button" className="modal-button sign-in-btn"><i className="fas fa-user"></i> Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignInModal;