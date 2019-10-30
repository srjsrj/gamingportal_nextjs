// https://stackoverflow.com/questions/51726391/how-to-create-a-search-field-in-reactjs

import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Search extends Component {
    state = {
        query: '',
        suggestions: []
    };

    handleInputChange = event => {
        const query = event.target.value;
        console.log('query', query);
        this.setState({
            query: query
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const queryStr = this.state.query;
        
        if(queryStr !== prevState.query) {
            fetch(`https://portal-services-prd.api.internal.gc.spilcloud.com:31999/v1/suggest/88/all/desktop?q=${queryStr}`)
                .then((response) => {
                    if(response.length) {
                        let responseJson = response.json();
                        if(responseJson) {
                        }
                    }
                })
        }
    }

    render() {
        return (
            <div className='c-search'>
                <input type='text' className='c-search--field' placeholder='Search' onChange={this.handleInputChange}/>

            </div>
        )
    }
} 

export default Search;