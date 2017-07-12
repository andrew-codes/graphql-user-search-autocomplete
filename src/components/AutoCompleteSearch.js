import AutoComplete from 'material-ui/AutoComplete';
import React from 'react';
import {graphql} from 'react-apollo';
import SearchPokemon from './../queries/SearchPosts.gql';

const AutoCompleteSearch = ({onChange, data}) => {
    return (
        <AutoComplete
            dataSource={(data.allPosts || []).map(post => post.description)}
            filter={() => true}
            name="PostSearch"
            onUpdateInput={(value) => onChange(value)}
        />
    )
};

export default graphql(SearchPokemon)(AutoCompleteSearch);
