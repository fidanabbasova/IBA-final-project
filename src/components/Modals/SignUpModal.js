import React, {Component} from "react";
import './signUpModal.scss'
class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };
    }
    componentWillMount() {
        const getCities = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/cities')
                .then(response => response.json())
                .then(json => {
                    this.setState({cities: json});
                });
        };
        getCities();
    };
    render() {
        return(
            <div className="modal sign-up-modal fade" id="signUpModal" tabindex="-1" role="dialog"
             aria-labelledby="signUpModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title col-md-10 offset-md-1 text-center"><i className="fas fa-paw"></i> Sign Up</div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="close-icon"><i className="fas fa-times"></i></span>
                            </button>
                        </div>
                        <div className="modal-body col-md-10 offset-md-1">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">First name</label>
                                    <input type="text" className="form-control" id="name"
                                           placeholder="Enter your first name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Surname</label>
                                    <input type="text" className="form-control" id="surname"
                                           placeholder="Enter your surname"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday">Birthday</label>
                                    <input type="date" className="form-control" id="birthday"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile phone</label>
                                    <input type="tel" className="form-control" id="mobile" placeholder='+9876543210'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select className="form-control" id="city">
                                        {
                                            this.state.cities.map((city) => {
                                                return(<option value={city.id} key={city.id}>{city.name}</option>);
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder='Enter your password'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="verifyPassword">Verify password</label>
                                    <input type="password" className="form-control" id="verifyPassword" placeholder='Enter your password again'/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer col-md-10 offset-md-1">
                            <button type="button" className="modal-button cancel-btn" data-dismiss="modal"><i className="fas fa-times"></i> Close</button>
                            <button type="button" className="modal-button sign-up-btn"><i className="fas fa-user"></i> Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUpModal;