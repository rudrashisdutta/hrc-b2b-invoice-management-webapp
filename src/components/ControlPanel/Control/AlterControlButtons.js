import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

function setSlNos(arr){
    let str = ""
    for(let i=0;i<arr.length;i++){
        str = str + "sl_nos=" + arr[i];
        if(i<arr.length-1){
            str = str + "&";
        }
    }
    return str;
}
function AlterControlButtons(props) {
    var deleteData = (e) => {
        alert("You are deleting some data!")
    }
    return (
            <>
            <ButtonGroup size="large" aria-label="large button group" className='alter control'>
                <Button size='large' id='add-button' variant="outlined">ADD</Button>
                <Button size='large' id='edit-button' className='middleButton' variant="outlined">EDIT</Button>
                <Button size='large' id='delete-button' variant="outlined" onClick={deleteData}>DELETE</Button>
            </ButtonGroup>
            </>
        );
    }

export default AlterControlButtons;