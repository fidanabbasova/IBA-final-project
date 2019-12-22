import React, {Component} from 'react';
import PostItem from "./PostItem";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './post.scss';
import Losts from "../../Losts/Losts";
import Home from "../Home";
class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    statusPost = () => {
        switch(this.props.statusId) {
            case "1": return 'lost';
            case "2": return 'found';
            case "3": return 'adopt';
        }
    };
    componentWillMount() {
        const props = this.props;
        const getFirstFourPosts = (posts) => {
            let firstFourPosts = [];
            for(let i=0; i<4; i++) {
                firstFourPosts.unshift(posts.filter((post) => post.statusId === props.statusId)[i]);
            }
            this.setState({posts: firstFourPosts });
        };
        const getPosts = (props) => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
                .then(response => response.json())
                .then(json => {
                    getFirstFourPosts(json);
                });
        };
        getPosts(props);
    };
    render() {
        return(
            <section id={this.statusPost()} className={'post-section ' + this.statusPost() + '-section container-fluid\''}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='post-section-title text-uppercase'>Have you <strong className='post-section-title-strong'>{this.props.title}</strong> a pet?</h2>
                        </div>
                        <div className="col-md-12">
                            <Link to={'/' + this.statusPost() + 's'} className={'posts-button ' + this.statusPost() + 's-button'}>
                                    <i className="fas fa-paw"></i> {'See all the ' + this.statusPost() + ' pets'}
                            </Link>
                        </div>
                    </div>
                    <div className='row post-row'>
                        {
                            this.state.posts.map((post) => {
                                return(
                                    <PostItem key={post.id} post={post} status={this.statusPost()}/>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        );
    };
}
export default Posts;
