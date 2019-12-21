import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import icon from './img/icon.png'
class PostItem extends Component{
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
                            return user.id === props.post.userId;
                        })
                    });
                });
            };

        getUser(props);
    };
    render() {
        const {id, name, description, image, date} = this.props.post;
        const status = this.props.status.charAt(0).toUpperCase() + this.props.status.substring(1);
        const {name: userName, surname: userSurname, mobile} = this.state.user;
        return(
           <div className="col-md-3 col-sm-6 py-0 px-0 mx-0 my-0">
               <Link to={'/'+ this.props.status +'s/' + id} className="post-container d-block">
                   <div className='post-img-container'>
                       <div className="post-img" style={{ backgroundImage: "url("+ image +")"}}></div>
                       <div className="post-hover d-flex justify-content-center align-items-center">
                           <img src={icon} className="post-hover-icon" alt=""/>
                       </div>
                   </div>
                   <div className="post-content post-content-item">
                       <h3 className="pet-name font-weight-bold">{name}</h3>
                       <h3 className="pet-description d-sm-none">{description.substr(0, 80)+'...'}</h3>
                       <h3 className="user">{status} by <strong>{userName} {userSurname}</strong></h3>
                       <h3 className="contact"><i className="fas fa-phone"></i> {mobile}</h3>
                       <h3 className="post-date"><i className="far fa-clock font-weight-bold"></i> {date}</h3>
                   </div>
               </Link>
           </div>
        )
    }
}
export default PostItem;