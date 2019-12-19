import React, {Component} from "react";
import icon from './img/icon.png'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
class PostItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    componentDidMount() {
        const props = this.props;
        const getUser = (props) => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/users')
                .then(response => response.json())
                .then(json => {
                    console.log('JSON = ', json);
                    console.log("Propd:", props.post.userId);
                    this.setState({
                        user: json.find(function (user) {
                            return user.id === props.post.userId;
                        })
                    });
                });
            };

        getUser(props);
    };
    render() {
        const {id, name, age, description, image, date, active} = this.props.post;
        const status = this.props.status.charAt(0).toUpperCase() + this.props.status.substring(1);
        const {name: userName, surname: userSurname, mobile} = this.state.user;
        return(
           <Router>
               <div className="col-md-3 col-sm-6 my-5 my-sm-0">
                   <Link to={'/posts/' + id} className="post-container d-block">
                       <div className='post-img-container'>
                           <div className="post-img" style={{ backgroundImage: "url("+ image +")"}}></div>
                           <div className="post-hover d-flex justify-content-center align-items-center">
                               <img src={icon} className="post-hover-icon" alt=""/>
                           </div>
                       </div>
                       <div className="post-content post-content-item">
                           <h3 className="pet-name font-weight-bold">{name}</h3>
                           <h3 className="pet-description">{description.substr(0, 95)+'...'}</h3>
                           <h3 className="user">{status} by <strong>{userName} {userSurname}</strong></h3>
                           <h3 className="contact">{mobile}</h3>
                           <h3 className="post-date"><i className="far fa-clock"></i> {date}</h3>
                       </div>
                   </Link>
               </div>
           </Router>
        )
    }
}
export default PostItem;