import React, {Component} from "react";
import { Link } from 'react-router-dom';
import icon from './img/icon.png'
class FoundItem extends Component{
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
                            return user.id === props.found.userId;
                        })
                    });
                });
        };

        getUser(props);
    };
    render() {
        const {id, name, description, image, date} = this.props.found;
        const {name: userName, surname: userSurname, mobile} = this.state.user;
        return(
            <div className="col-md-3 col-sm-6 my-5 mb-sm-0">
                <Link to={'/founds/' + id} className="found-container d-block">
                    <div className='found-img-container'>
                        <div className="found-img" style={{ backgroundImage: "url("+ image +")"}}></div>
                        <div className="found-hover d-flex justify-content-center align-items-center">
                            <img src={icon} className="found-hover-icon" alt=""/>
                        </div>
                    </div>
                    <div className="found-content found-content-item">
                        <h3 className="pet-name font-weight-bold">{name}</h3>
                        <h3 className="pet-description d-sm-none">{description.substr(0, 80)+'...'}</h3>
                        <h3 className="user">Found by <strong>{userName} {userSurname}</strong></h3>
                        <h3 className="contact"><i className="fas fa-phone"></i> {mobile}</h3>
                        <h3 className="found-date"><i className="far fa-clock font-weight-bold"></i> {date}</h3>
                    </div>
                </Link>
            </div>
        )
    }
}
export default FoundItem;