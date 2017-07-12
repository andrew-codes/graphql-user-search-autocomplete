import React, {Component} from 'react';
import AutoCompleteSearch from './AutoCompleteSearch';

class AutoCompleteSearchContainer extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            searchText: '',
        }
    }

    handleChange = (value) => {
        this.setState({searchText: value});
    };

    render() {
        return (
            <div>
                <AutoCompleteSearch
                    name={this.state.searchText}
                    onChange={this.handleChange}
                />
            </div>
        );
    };
}

export default AutoCompleteSearchContainer;
