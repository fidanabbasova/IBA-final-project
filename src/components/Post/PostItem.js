import React, {Component} from "react";
import icon from './img/icon.png'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
class PostItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/users')
            .then(response => response.json())
            .then(json => {
                this.setState({user:
                    json.find((user) => {
                        return user.id === this.props.post.userId;
                    })
                });
            });
    };
    render() {
        const {id, name, age, description, image, date, active} = this.props.post;
        const status = this.props.status.charAt(0).toUpperCase() + this.props.status.substring(1);
        const {name: userName, mobile} = this.state.user;
        return(
           <Router>
               <Link to={'/posts/' + id} className="post-container col-md-3 col-sm-6">
                  <div className='post-img-container'>
                      <div className="post-img" style={{ backgroundImage: "url("+ image +")"}}></div>
                      <div className="post-hover d-flex justify-content-center align-items-center">
                          <img src={icon} className="post-hover-icon" alt=""/>
                      </div>
                  </div>
                   <div className="post-content post-content-item">
                       <h3 className="pet-name">{name}</h3>
                       <p className="pet-description">{description.substr(0, 60)+'...'}</p>
                       <h3 className="pet-name">{status} by {userName}</h3>
                       {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                       {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                   </div>
               </Link>
           </Router>
        )
    }
}
export default PostItem;