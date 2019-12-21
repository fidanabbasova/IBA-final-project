import React, {Component} from 'react';
import './founds.scss';
import FoundItem from "./FoundItem";
class FoundDogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            losts: []
        };
    }
    componentWillMount() {
        const getLosts = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
                .then(response => response.json())
                .then(json => {
                    this.setState({losts: json.filter((post) => post.statusId === "2" && post.speciesId == "1")});
                });
        };
        getLosts(this.props);
    };
    render() {
        return(
            <div className='row'>
                {
                    this.state.losts.map((lost) => {
                        return(
                            <FoundItem key={lost.id} lost={lost}/>
                        );
                    })
                }
            </div>
        );
    }
}
export default  FoundDogs;
