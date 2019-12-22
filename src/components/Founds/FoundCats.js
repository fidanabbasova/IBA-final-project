import React, {Component} from 'react';
import './founds.scss';
import FoundItem from "./FoundItem";
class FoundCats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            founds: []
        };
    }
    componentWillMount() {
        const getLosts = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
                .then(response => response.json())
                .then(json => {
                    this.setState({founds: json.filter((post) => post.statusId === "2" && post.speciesId === "2")});
                });
        };
        getLosts(this.props);
    };
    render() {
        return(
            <div className='row'>
                {
                    this.state.founds.map((found) => {
                        return(
                            <FoundItem key={found.id} found={found}/>
                        );
                    })
                }
            </div>
        );
    }
}
export default  FoundCats;
