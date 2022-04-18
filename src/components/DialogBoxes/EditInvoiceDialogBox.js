import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField, DialogTitle} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import css from './Dialog.module.css';
import axios from 'axios';

export default function EditInvoiceDialogBox({setTableData, invoiceID, slNo, invoiceCurrency, customerPaymentTerms, openEditInvoiceConfirmationDialog, setOpenEditInvoiceConfirmationDialog}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [result, setResult] = useState(0);
    const [newInvoiceCurrency, setInvoiceNewCurrency] = useState(null);
    const [newCustomerPaymentTerms, setNewCustomerPaymentTerms] = useState(null);
    axios.defaults.baseURL = 'http://localhost:8080/HRC_java/';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
    const handleClose = () => {
        setOpenEditInvoiceConfirmationDialog(false);
    };
    const handleClosePositive = (e) => {
        handleClose()
        axios.get("http://localhost:8080/HRC_java/Edit?slno=" + slNo + "&invoicecurrency=" + newInvoiceCurrency + "&customerpaymentterm=" + newCustomerPaymentTerms).then(response => setResult(response.data));
        setTableData([]);
        setTimeout(() => {  axios.get("http://localhost:8080/HRC_java/View").then(response => setTableData(response.data)); }, 2000);
    }
    const onInvoiceCurrencyTextChange = (e) => {
        const re = /^[A-Za-z]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setInvoiceNewCurrency(e.target.value);
        }
    }
    const onCustomerPaymentTermsTextChange = (e) => {
        const re = /^[A-Za-z0-9]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setNewCustomerPaymentTerms(e.target.value);
        }
    }

    return (
        <div className={css.dialogContainer}>
        <Dialog
        fullScreen={fullScreen}
            open={openEditInvoiceConfirmationDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={css.dialog}
            scroll='paper'
            disableEscapeKeyDown={true}
        >
            <span className={css.dialogContent}>
                <DialogTitle id="alert-dialog-title">
                {"Enter the new data for INVOICE ID: " + invoiceID}
                </DialogTitle>
                <DialogContent>
                <div
                    className={css.edit}>
                <TextField
                    required
                    id="edit-invoice-currency"
                    label={"INVOICE CURRENCY:"}
                    defaultValue={invoiceCurrency}
                    value={newInvoiceCurrency}
                    className={css.textField}
                    onChange={onInvoiceCurrencyTextChange}
                />
                <TextField
                    required
                    id="edit-customer-payment-terms"
                    label={"CUSTOMER PAYMENT TERMS:"}
                    defaultValue={customerPaymentTerms}
                    value={newCustomerPaymentTerms}
                    className={css.textField}
                    onChange={onCustomerPaymentTermsTextChange}
                />
                </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClosePositive}>
                    Agree
                </Button>
                </DialogActions>
            </span>
        </Dialog>
        </div>
    );
}