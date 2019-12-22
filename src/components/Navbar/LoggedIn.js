import React, {Component} from 'react';
class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    logOut() {
        if(localStorage.getItem("userId"))  localStorage.removeItem("userId");
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/users')
            .then(response => response.json())
            .then(json => {
                this.setState({user:
                        json.find((user) => {
                            return user.id === localStorage.getItem("userId");
                        })
                });
            });
    };
    render() {
        const {name, surname} = this.state.user;
        return (
            <div className="user-dropdown nav navbar-nav ml-auto dropdown">
                <button className="btn dropdown-toggle" id="dropdownUser"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {name} {surname}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownUser">
                    <button className="dropdown-item"><i className="fas fa-user-circle"></i> Profile</button>
                    <button className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Log out</button>
                </div>
            </div>
        );
    }
}
export default LoggedIn;