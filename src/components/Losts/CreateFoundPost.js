import React, {Component} from "react";
import './createFoundPost.scss'
class CreateFoundPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            species: [],
            picture: 'https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png'
        };
    }
    componentWillMount() {
        const getCities = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/cities')
                .then(response => response.json())
                .then(json => {
                    this.setState({cities: json});
                });
        };
        const getSpecies = () => {
            fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/species')
                .then(response => response.json())
                .then(json => {
                    this.setState({species: json});
                });
        };
        getCities();
        getSpecies();
    };
    render() {
        const handleChange = (event) => {
            if(event.target.value) this.setState({picture: event.target.value});
        };
        return(
            <div className="modal create-found-modal fade" id="createFoundPost" tabIndex="-1" role="dialog"
             aria-labelledby="createFoundPostTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered col-md-12" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title col-md-10 offset-md-1 text-center"><i className="fas fa-paw"></i> Create post for found pet</div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="close-icon"><i className="fas fa-times"></i></span>
                            </button>
                        </div>
                        <div className="modal-body col-md-10 offset-md-1">
                            <form>
                                <div className="col-sm-6 offset-sm-3">
                                    <div className="pet-img-container">
                                        <div className="pet-img" style={{ backgroundImage: "url("+ this.state.picture +")"}}></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="picture">Picture url</label>
                                    <input type="text" className="form-control" id="picture"
                                           placeholder="Enter pet's picture" onBlur={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="species">Species</label>
                                    <select className="form-control" id="species">
                                        {
                                            this.state.species.map((species) => {
                                                return(<option value={species.id} key={species.id}>{species.type.charAt(0).toUpperCase() + species.type.substring(1)}</option>);
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select className="form-control" id="city">
                                        {
                                            this.state.cities.map((city) => {
                                                return(<option value={city.id} key={city.id}>{city.name}</option>);
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" min="1" className="form-control" id="age"
                                           placeholder="Add pets's age"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" rows="5" id="description" placeholder="Add pets's description"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer col-md-10 offset-md-1">
                            <button type="button" className="modal-button cancel-btn" data-dismiss="modal"><i className="fas fa-times"></i> Close</button>
                            <button type="button" className="modal-button found-btn"><i className="fas fa-plus"></i> Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateFoundPost;