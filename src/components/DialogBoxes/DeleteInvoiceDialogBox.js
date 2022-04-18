import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import css from './Dialog.module.css';
import axios from 'axios';

export default function DeleteInvoiceDialogBox({invoiceIDs, slNos, openDeleteInvoiceConfirmationDialog, setOpenDeleteInvoiceConfirmationDialog}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [result, setResult] = useState(0);
    axios.defaults.baseURL = 'http://localhost:8080/HRC_java/';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
    const handleClose = () => {
        setOpenDeleteInvoiceConfirmationDialog(false);
    };
    const handleClosePositive = (e) => {
        handleClose()
        axios.get("http://localhost:8080/HRC_java/Delete?slnos=" + slNos).then(response => setResult(response.data));
        if (result === 1) {window.location.reload(true)}
    }

    return (
        <div >
        <Dialog
        fullScreen={fullScreen}
            open={openDeleteInvoiceConfirmationDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={css.dialog}
            scroll='paper'
            disableEscapeKeyDown={true}
        >
            <span className={css.dialogContent}>
                <DialogTitle id="alert-dialog-title">
                {"Delete the following Invoices?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <span className={css.DialogContentText}>{"Invoice IDs: "  + invoiceIDs}</span>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClosePositive} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </span>
        </Dialog>
        </div>
    );
}