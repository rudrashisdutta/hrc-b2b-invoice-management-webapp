import React, { useState } from 'react';
import './Control.css'
import {TextField} from '@mui/material';

export default function Search({name}) {
    var onSearchIDChange = (e) => {
        
    }
    return (
        <div className='control'>
            <TextField id="search" type='number' label={'SEARCH ' + name} variant="outlined" onChange={onSearchIDChange}/>
        </div>
    );
}