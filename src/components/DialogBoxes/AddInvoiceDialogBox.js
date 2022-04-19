import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField, DialogTitle} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import css from './Dialog.module.css';
import axios from 'axios';

export default function EditInvoiceDialogBox({setTableData, slNo, openAddInvoiceConfirmationDialog, setOpenAddInvoiceConfirmationDialog}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [result, setResult] = useState(0);


    const [businessCode, setBusinessCode] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [clearDate, setClearDate] = useState("");
    const [businessYear, setBusinessYear] = useState("");
    const [docID, setDocID] = useState("");
    const [postingDate, setPostingDate] = useState("");
    const [areaBusiness, setAreaBusiness] = useState("");
    const [documentCreateDate, setDocumentCreateDate] = useState("");
    const [dueInDate, setDueInDate] = useState("");
    const [invoiceCurrency, setInvoiceCurrency] = useState(null);
    const [documentType, setDocumentType] = useState("");
    const [postingID, setPostingID] = useState("");
    const [totalOpenAmount, setTotalOpenAmount] = useState("");
    const [baselineCreateDate, setBaselineCreateDate] = useState("");
    const [customerPaymentTerms, setCustomerPaymentTerms] = useState(null);
    const [invoiceID, setInvoiceID] = useState("");

    axios.defaults.baseURL = 'http://localhost:8080/HRC_java/';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
    const handleClose = () => {
        setOpenAddInvoiceConfirmationDialog(false);
    };
    const handleClosePositive = (e) => {
        axios.get("http://localhost:8080/HRC_java/Add?slno=" + slNo + "&businesscode=" + businessCode + "&customerid=" + customerID + "&cleardate=" + clearDate + "&businessyear=" + businessYear + "&docid=" + docID + "&postingdate=" + postingDate + "&areabusiness=" + areaBusiness + "&documentcreatedate=" + documentCreateDate + "&dueindate=" + dueInDate + "&invoicecurrency=" + invoiceCurrency + "&documenttype=" + documentType + "&postingid=" + postingID + "&totalopenamount=" + totalOpenAmount + "&baselinecreatedate=" + baselineCreateDate + "&customerpaymentterm=" + customerPaymentTerms + "&invoiceid=" + invoiceID).then(response => setResult(response.data));
        handleClose()
        setTableData([]);
        setTimeout(() => {  axios.get("http://localhost:8080/HRC_java/View").then(response => setTableData(response.data)); }, 2000);
    }
    const onBusinessCodeTextChange = (e) => {
        const re = /^[A-Z0-9]+$/;
        if (e.target.value.length < 5 && (e.target.value === "" || re.test(e.target.value))) {
            setBusinessCode(e.target.value);
        }
    }
    const onCustomerIDTextChange = (e) => {
        const re = /^[0-9]+$/;
        if (e.target.value.length < 10 && (e.target.value === "" || re.test(e.target.value))) {
            setCustomerID(e.target.value);
        }
    }
    const onClearDateTextChange = (e) => {
        const re = /^[0-9-]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setClearDate(e.target.value);
        }
    }
    const onBusinessYearTextChange = (e) => {
        const re = /^[0-9]+$/;
        if (e.target.value.length < 5 && (e.target.value === "" || re.test(e.target.value))) {
            setBusinessYear(e.target.value);
        }
    }
    const onDocIDTextChange = (e) => {
        const re = /^[0-9]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setDocID(e.target.value);
        }
    }
    const onPostingDateTextChange = (e) => {
        const re = /^[0-9-]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setPostingDate(e.target.value);
        }
    }
    const onAreaBusinessTextChange = (e) => {
        const re = /^[A-Za-z]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setAreaBusiness(e.target.value);
        }
    }
    const onDocumentCreateDateTextChange = (e) => {
        const re = /^[0-9-]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setDocumentCreateDate(e.target.value);
        }
    }
    const onDueInDateTextChange = (e) => {
        const re = /^[0-9-]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setDueInDate(e.target.value);
        }
    }
    const onInvoiceCurrencyTextChange = (e) => {
        const re = /^[A-Za-z]+$/;
        if (e.target.value.length < 6 && (e.target.value === "" || re.test(e.target.value))) {
            setInvoiceCurrency(e.target.value);
        }
    }
    const onDocumentTypeTextChange = (e) => {
        const re = /^[A-Za-z]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setDocumentType(e.target.value);
        }
    }
    const onPostingIDTextChange = (e) => {
        const re = /^[0-9]+$/;
        if (e.target.value.length < 5 && (e.target.value === "" || re.test(e.target.value))) {
            setPostingID(e.target.value);
        }
    }
    const onTotalOpenAmountTextChange = (e) => {
        const re = /^[0-9]+$/;
        if (e.target.value.length < 7 && (e.target.value === "" || re.test(e.target.value))) {
            setTotalOpenAmount(e.target.value);
        }
    }
    const onBaselineCreateDateTextChange = (e) => {
        const re = /^[0-9-]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setBaselineCreateDate(e.target.value);
        }
    }
    const onCustomerPaymentTermsTextChange = (e) => {
        const re = /^[A-Za-z0-9]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setCustomerPaymentTerms(e.target.value);
        }
    }
    const onInvoiceIDTextChange = (e) => {
        const re = /^[0-9]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setInvoiceID(e.target.value);
        }
    }

    return (
        <div className={css.dialogContainer}>
        <Dialog
        fullScreen={fullScreen}
            open={openAddInvoiceConfirmationDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={css.dialog}
            scroll='paper'
            disableEscapeKeyDown={true}
        >
            <span className={css.dialogContent}>
                <DialogTitle id="alert-dialog-title">
                {"ADD details for new Invoice: (" + slNo + ")"}
                </DialogTitle>
                <DialogContent>
                <div
                    className={css.edit}>
                <TextField
                    required
                    id="add-business-code"
                    label={"BUSINESS CODE:"}
                    value={businessCode}
                    className={css.textField}
                    onChange={onBusinessCodeTextChange}
                />
                <TextField
                    required
                    id="add-customer-id"
                    label={"CUSTOMER ID:"}
                    value={customerID}
                    className={css.textField}
                    onChange={onCustomerIDTextChange}
                />
                <TextField
                    required
                    id="add-clear-date"
                    label={"CLEAR DATE:"}
                    value={clearDate}
                    className={css.textField}
                    onChange={onClearDateTextChange}
                />
                <TextField
                    required
                    id="add-business-year"
                    label={"BUSINESS YEAR:"}
                    value={businessYear}
                    className={css.textField}
                    onChange={onBusinessYearTextChange}
                />
                <TextField
                    required
                    id="add-doc-id"
                    label={"DOC ID:"}
                    value={docID}
                    className={css.textField}
                    onChange={onDocIDTextChange}
                />
                <TextField
                    required
                    id="add-posting-date"
                    label={"POSTING DATE:"}
                    value={postingDate}
                    className={css.textField}
                    onChange={onPostingDateTextChange}
                />
                <TextField
                    required
                    id="add-area-business"
                    label={"AREA BUSINESS:"}
                    value={areaBusiness}
                    className={css.textField}
                    onChange={onAreaBusinessTextChange}
                />
                <TextField
                    required
                    id="add-document-create-date"
                    label={"DOCUMENT CREATE DATE:"}
                    value={documentCreateDate}
                    className={css.textField}
                    onChange={onDocumentCreateDateTextChange}
                />
                <TextField
                    required
                    id="add-due-in-date"
                    label={"DUE IN DATE:"}
                    value={dueInDate}
                    className={css.textField}
                    onChange={onDueInDateTextChange}
                />
                <TextField
                    required
                    id="add-invoice-currency"
                    label={"INVOICE CURRENCY:"}
                    value={invoiceCurrency}
                    className={css.textField}
                    onChange={onInvoiceCurrencyTextChange}
                />
                <TextField
                    required
                    id="add-document-type"
                    label={"DOCUMENT TYPE:"}
                    value={documentType}
                    className={css.textField}
                    onChange={onDocumentTypeTextChange}
                />
                <TextField
                    required
                    id="add-posting-id"
                    label={"POSTING ID:"}
                    value={postingID}
                    className={css.textField}
                    onChange={onPostingIDTextChange}
                />
                <TextField
                    required
                    id="add-total-open-amount"
                    label={"TOTAL OPEN AMOUNT:"}
                    value={totalOpenAmount}
                    className={css.textField}
                    onChange={onTotalOpenAmountTextChange}
                />
                <TextField
                    required
                    id="add-baseline-create-date"
                    label={"BASELINE CREATE DATE:"}
                    value={baselineCreateDate}
                    className={css.textField}
                    onChange={onBaselineCreateDateTextChange}
                />
                <TextField
                    required
                    id="add-customer-payment-term"
                    label={"CUSTOMER PAYMENT TERM:"}
                    value={customerPaymentTerms}
                    className={css.textField}
                    onChange={onCustomerPaymentTermsTextChange}
                />
                <TextField
                    required
                    id="add-invoice-id"
                    label={"INVOICE ID:"}
                    value={invoiceID}
                    className={css.textField}
                    onChange={onInvoiceIDTextChange}
                />
                </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClosePositive}>
                    Save
                </Button>
                </DialogActions>
            </span>
        </Dialog>
        </div>
    );
}