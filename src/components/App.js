import React from 'react';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoCompleteSearchContainer from './AutoCompleteSearchContainer';
import Search from './Search';
import SearchOriginal from './SearchOriginal';

export default function App() {
    return (
        <ThemeProvider>
            <div>
                <h1>
                    Searching Pokemon Application Example
                </h1>
                <section>
                    <h2>Original Search</h2>
                    <p>This search uses the original approach to the problem (the implementation when we first met).</p>
                    <SearchOriginal id="cj5123xclkjnf0178mp66j8i1" />
                </section>
                <hr />
                <section>
                    <h2>Search with SearchResults Component</h2>
                    <p>This approach moves the graphql query to a child component; SearchResults. The parent, Search,
                       owns the state of the user input and passes it down to the child as a prop; allowing it to be
                       used in the GraphQL query.</p>
                    <Search />
                </section>
                <hr />
                <section>
                    <h2>Material-UI AutoComplete</h2>
                    <p>This approach uses the auto-complete of Material-UI. The container component owns the user input
                       state and passes a callback `onChange` to the child search component. When the AutoComplete
                       changes value, it calls the callback with the value; thus updating the state in the parent. This
                       state is then pushed back into the child as a prop. The GraphQL is applied on the child.</p>
                    <p>Worth noting that the AutoComplete component of Material-UI, takes the query output as a
                       datasource, will also try to filter the datasource client-side. Since the datasource is the
                       result of searching, a.k.a filtering on the server via GraphQL, we do not want the client-side
                       filtering behavior. This can be disabled by passing a filter prop that always returns true.</p>
                    <AutoCompleteSearchContainer />
                </section>
            </div>
        </ThemeProvider>
    )
};
