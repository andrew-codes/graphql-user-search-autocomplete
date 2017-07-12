import React, {Component} from 'react';
import SearchResults from './SearchResults';

class Search extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            searchText: '',
        }
    }

    handleChange = (evt) => {
        const searchText = evt.target.value;
        this.setState({searchText: searchText});
    };

    render() {
        return (
            <div>
                <label>
                    ID: <input onChange={this.handleChange} />
                </label>
                <SearchResults name={this.state.searchText} />
            </div>
        );
    };
}

export default Search;
