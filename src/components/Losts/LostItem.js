import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import icon from './img/icon.png'
class LostItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    componentWillMount() {
        const props = this.props;
        const getUser = (props) => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/users')
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        user: json.find(function (user) {
                            return user.id === props.lost.userId;
                        })
                    });
                });
        };

        getUser(props);
    };
    render() {
        const {id, name, description, image, date} = this.props.lost;
        const {name: userName, surname: userSurname, mobile} = this.state.user;
        return(
            <div className="col-md-3 col-sm-6 my-5 mb-sm-0">
                <Link to={'/lost/' + id} className="lost-container d-block">
                    <div className='lost-img-container'>
                        <div className="lost-img" style={{ backgroundImage: "url("+ image +")"}}></div>
                        <div className="lost-hover d-flex justify-content-center align-items-center">
                            <img src={icon} className="lost-hover-icon" alt=""/>
                        </div>
                    </div>
                    <div className="lost-content lost-content-item">
                        <h3 className="pet-name font-weight-bold">{name}</h3>
                        <h3 className="pet-description d-sm-none">{description.substr(0, 80)+'...'}</h3>
                        <h3 className="user">Lost by <strong>{userName} {userSurname}</strong></h3>
                        <h3 className="contact"><i className="fas fa-phone"></i> {mobile}</h3>
                        <h3 className="lost-date"><i className="far fa-clock font-weight-bold"></i> {date}</h3>
                    </div>
                </Link>
            </div>
        )
    }
}
export default LostItem;