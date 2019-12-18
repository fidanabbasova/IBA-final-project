import React, {Component} from 'react';
import PostItem from "./PostItem";
import './post.scss';
class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    statusPost = () => {
        switch(this.props.statusId) {
            case 1: return 'lost';
            case 2: return 'found';
            case 3: return 'adopt';
        }
    };
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({posts:
                     json.filter((post) => {
                        return post.statusId === this.props.statusId;
                     })
                });
            });
    };
    render() {
        return(
            <section id={'this.statusPost()'} className={'post-section ' + this.statusPost() + '-section container-fluid\''}>
                <div className='container'>
                    <h2 className='post-section-title text-uppercase'>Have you <strong className='post-section-title-strong'>{this.props.title}</strong> a pet?</h2>
                    <div className='row'>
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
