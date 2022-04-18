import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';

export default function Refresh({updateTable, setUpdateTable}) {
    var reloadData = () => {
        window.location.reload(false);
    }
    return (
        <ButtonGroup size="large" aria-label="large button group" className='control'>
            <Button size='large' id='refresh-button' variant="outlined" onClick={reloadData}>↻</Button>
        </ButtonGroup>
    );
}