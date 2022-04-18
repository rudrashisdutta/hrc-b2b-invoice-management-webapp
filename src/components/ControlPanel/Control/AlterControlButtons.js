import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';
import axios from 'axios';
import DeleteInvoiceDialogBox from '../../DialogBoxes/DeleteInvoiceDialogBox';

function AlterControlButtons({selectedFlatRows, isOneRowSelected, isRowSelected}) {
    const [invoiceIDs, setInvoiceIDs] = useState("");
    const [slNos, setSlNos] = useState("");
    const [openDeleteInvoiceConfirmationDialog, setOpenDeleteInvoiceConfirmationDialog] = React.useState(false);

    axios.defaults.baseURL = 'http://localhost:8080/HRC_java/';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
    var getSlNos = (selectedFlatRows) => {
        let slnos = "";
        let invoices = "";
        selectedFlatRows.map((row) => {
            slnos += (row.values['slNo']) + "-"
            invoices += (row.values['invoiceID']) + " ";
            return null;
        })
        slnos = slnos.slice(0, -1);
        invoices = invoices.slice(0, -1);
        setInvoiceIDs(invoices);
        setSlNos(slnos);
    }
    var addData = (e) => {

    }
    var deleteData = (e) => {
        setOpenDeleteInvoiceConfirmationDialog(true)
        getSlNos(selectedFlatRows);
    }
    var editData = (e) => {
        alert("You are editing a data!")
    }
    return (
            <>
            <ButtonGroup size="large" aria-label="large button group" className='alter control'>
                <Button size='large' id='add-button' variant="outlined" onClick={addData}>ADD</Button>
                <Button size='large' id='edit-button' className='middleButton' variant="outlined" onClick={editData} disabled={!isOneRowSelected}>EDIT</Button>
                <Button size='large' id='delete-button' variant="outlined" onClick={deleteData} disabled={!isRowSelected} >DELETE</Button>
                {isRowSelected && openDeleteInvoiceConfirmationDialog && <DeleteInvoiceDialogBox invoiceIDs={invoiceIDs} slNos={slNos} openDeleteInvoiceConfirmationDialog={openDeleteInvoiceConfirmationDialog} setOpenDeleteInvoiceConfirmationDialog={setOpenDeleteInvoiceConfirmationDialog} />}
            </ButtonGroup>
            </>
        );
    }

export default AlterControlButtons;