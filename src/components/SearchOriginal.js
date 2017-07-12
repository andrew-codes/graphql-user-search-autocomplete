import React from 'react';
import {graphql} from 'react-apollo';
import SearchPokemonByID from './../queries/SearchPosts.gql';

const SearchOriginal = (props) => {
    const handleChange = (evt) => {
        const searchText = evt.target.value;
        // We need to somehow apply the new ID to our query.
        // It would appear that updating the query input is done by pushing
        // a prop into this component and not from within it.
    };

    return (
        <div>
            <label>
                ID: <input onChange={handleChange}/>
            </label>
            Results: {props.data.allPosts && props.data.allPosts.join(',')}
        </div>
    );
};

export default graphql(SearchPokemonByID)(SearchOriginal);
