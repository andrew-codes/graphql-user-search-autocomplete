import 'isomorphic-fetch';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {render} from 'react-dom';
import App from './components/App';

injectTapEventPlugin();

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj3kiseko5el50161985m58h9'
    }),
});

render((
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
), document.getElementById('root'));
