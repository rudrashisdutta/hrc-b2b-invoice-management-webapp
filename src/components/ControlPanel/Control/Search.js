import React, { Component } from 'react';
import './Control.css'
import {TextField} from '@mui/material';

class Search extends Component {
    onSearchIDChange = (e) => {
        
    }
    render() {
        return (
            <div className='control'>
                <TextField id="search" type='number' label="Search CUSTOMER ID" variant="outlined" onChange={this.onSearchIDChange}/>
            </div>
        );
    }
}

export default Search;