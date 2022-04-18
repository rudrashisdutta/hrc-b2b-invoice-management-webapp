import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField, DialogTitle} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import css from './Dialog.module.css';
import axios from 'axios';

export default function EditInvoiceDialogBox({invoiceID, slNo, invoiceCurrency, customerPaymentTerms, openEditInvoiceConfirmationDialog, setOpenEditInvoiceConfirmationDialog}) {
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
        // axios.get("http://localhost:8080/HRC_java/Edit?slno=" + slNo + "&invoicecurrency=" + invoiceCurrency + "&customerpaymentterms=" + customerPaymentTerms).then(response => setResult(response.data));
        // if (result === 1) {window.location.reload(true)}
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
                    className={css.textField}
                />
                <TextField
                    required
                    id="edit-customer-payment-terms"
                    label={"CUSTOMER PAYMENT TERMS:"}
                    defaultValue={customerPaymentTerms}
                    className={css.textField}
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