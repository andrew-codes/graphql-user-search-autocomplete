import React from 'react';
import {graphql} from 'react-apollo';
import SearchPokemonByID from './../queries/SearchPosts.gql';

const SearchResults = (props) => (
    <ul>
        {(props.data.allPosts || []).map((post, postIndex) => (
            <li
                key={postIndex}>
            {post.description}
        </li>
        ))}
    </ul>
);
export default graphql(SearchPokemonByID)(SearchResults);
