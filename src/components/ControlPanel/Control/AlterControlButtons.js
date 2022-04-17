import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import axios from 'axios';

function AlterControlButtons({selectedFlatRows, isOneRowSelected, isRowSelected}) {
    const [response, setResponse] = useState(0);
    axios.defaults.baseURL = 'http://localhost:8080/HRC_java/';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
    var getSlNos = (selectedFlatRows) => {
        let slnos = "";
        selectedFlatRows.map((row) => {
            slnos += (row.values['slNo']) + "-"
            return null;
        })
        slnos = slnos.slice(0, -1);
        return slnos;
    }
    var deleteData = (e) => {
        alert("You are deleting some data!")
        let slNos = getSlNos(selectedFlatRows);
        setResponse(slNos);
        axios.get("http://localhost:8080/HRC_java/Delete?slnos=" + slNos).then(response => setResponse(response.data));
        alert(response ? "Successfully Deleted" : "Failed to delete!");
    }
    var editData = (e) => {
        alert("You are edit a data!")
    }
    return (
            <>
            <ButtonGroup size="large" aria-label="large button group" className='alter control'>
                <Button size='large' id='add-button' variant="outlined">ADD</Button>
                <Button size='large' id='edit-button' className='middleButton' variant="outlined" onClick={editData} disabled={!isOneRowSelected}>EDIT</Button>
                <Button size='large' id='delete-button' variant="outlined" onClick={deleteData} disabled={!isRowSelected}>DELETE</Button>
            </ButtonGroup>
            </>
        );
    }

export default AlterControlButtons;