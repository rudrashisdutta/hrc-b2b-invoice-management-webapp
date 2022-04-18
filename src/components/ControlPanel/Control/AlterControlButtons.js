import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';
import axios from 'axios';
import DeleteInvoiceDialogBox from '../../DialogBoxes/DeleteInvoiceDialogBox';
import EditInvoiceDialogBox from '../../DialogBoxes/EditInvoiceDialogBox';

function AlterControlButtons({setTableData, selectedFlatRows, isOneRowSelected, isRowSelected}) {
    const [invoiceIDs, setInvoiceIDs] = useState(null);
    const [slNos, setSlNos] = useState(null);
    const [invoiceCurrency, setInvoiceCurrency] = useState(null);
    const [customerPaymentTerms, setCustomerPaymentTerms] = useState(null);
    const [openDeleteInvoiceConfirmationDialog, setOpenDeleteInvoiceConfirmationDialog] = useState(false);
    const [openEditInvoiceConfirmationDialog, setOpenEditInvoiceConfirmationDialog] = useState(false);

    axios.defaults.baseURL = 'http://localhost:8080/HRC_java/';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
    var getInvoiceInfo = (selectedFlatRows) => {
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
    var getEditableProperties = (selectedFlatRows) => {
        getInvoiceInfo(selectedFlatRows)
        selectedFlatRows.map((row) => {
            setInvoiceCurrency(row.values['invoiceCurrency']);
            setCustomerPaymentTerms(row.values['custPaymentTerms']);
            return null;
        })
    }
    var addData = (e) => {

    }
    var deleteData = (e) => {
        setOpenDeleteInvoiceConfirmationDialog(true)
        getInvoiceInfo(selectedFlatRows);
    }
    var editData = (e) => {
        getEditableProperties(selectedFlatRows)
        setOpenEditInvoiceConfirmationDialog(true);
    }
    return (
            <>
            <ButtonGroup size="large" aria-label="large button group" className='alter control'>
                <Button size='large' id='add-button' variant="outlined" onClick={addData}>ADD</Button>
                <Button size='large' id='edit-button' className='middleButton' variant="outlined" onClick={editData} disabled={!isOneRowSelected}>EDIT</Button>
                <Button size='large' id='delete-button' variant="outlined" onClick={deleteData} disabled={!isRowSelected} >DELETE</Button>
                {isRowSelected && openDeleteInvoiceConfirmationDialog && <DeleteInvoiceDialogBox setTableData={setTableData} invoiceIDs={invoiceIDs} slNos={slNos} openDeleteInvoiceConfirmationDialog={openDeleteInvoiceConfirmationDialog} setOpenDeleteInvoiceConfirmationDialog={setOpenDeleteInvoiceConfirmationDialog} />}
                {isOneRowSelected && openEditInvoiceConfirmationDialog && <EditInvoiceDialogBox setTableData={setTableData} invoiceID={invoiceIDs} slNo={slNos} invoiceCurrency={invoiceCurrency} customerPaymentTerms={customerPaymentTerms} openEditInvoiceConfirmationDialog={openEditInvoiceConfirmationDialog} setOpenEditInvoiceConfirmationDialog={setOpenEditInvoiceConfirmationDialog} />}
            </ButtonGroup>
            </>
        );
    }

export default AlterControlButtons;