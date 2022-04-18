import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';
import axios from 'axios';

export default function Refresh({setTableData}) {
    var reloadData = () => {
        setTableData([]);
        axios.get("http://localhost:8080/HRC_java/View").then(response => setTableData(response.data));
    }
    return (
        <ButtonGroup size="large" aria-label="large button group" className='control'>
            <Button size='large' id='refresh-button' variant="outlined" onClick={reloadData}>↻</Button>
        </ButtonGroup>
    );
}