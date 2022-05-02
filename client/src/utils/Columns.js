import Search from "../components/ControlPanel/Control/Search";

const columns = [
    {
        accessor: "slNo",
        Header: "Sl. No.",
        disableFilters: true,
    },
    {
        accessor: "businessCode",
        Header: "Business Code",
        disableFilters: true,
    },
    {
        accessor: "custNumber",
        Header: "Customer Number",
        Filter: Search
    },
    {
        accessor: "clearDate",
        Header: "Clear Date",
        disableFilters: true,
    },
    {
        accessor: "businessYear",
        Header: "Business Year",
        Filter: Search
    },
    {
        accessor: "docID",
        Header: "Document ID",
        Filter: Search
    },
    {
        accessor: "postingDate",
        Header: "Posting Date",
        disableFilters: true,
    },
    {
        accessor: "documentCreateDate",
        Header: "Document Create Date",
        disableFilters: true,
    },
    {
        accessor: "dueInDate",
        Header: "Due In Date",
        disableFilters: true,
    },
    {
        accessor: "invoiceCurrency",
        Header: "Invoice Currency",
        disableFilters: true,
    },
    {
        accessor: "documentType",
        Header: "Document Type",
        disableFilters: true,
    },
    {
        accessor: "postingID",
        Header: "Posting ID",
        disableFilters: true,
    },
    {
        accessor: "totalOpenAmount",
        Header: "Total Open Amount",
        disableFilters: true,
    },
    {
        accessor: "baselineCreateDate",
        Header: "Baseline Create Date",
        disableFilters: true,
    },
    {
        accessor: "custPaymentTerms",
        Header: "Customer Payment Terms",
        disableFilters: true,
    },
    {
        accessor: "invoiceID",
        Header: "Invoice ID",
        Filter: Search
    },
    {
        accessor: "isOpen",
        Header: "Is Open",
        disableFilters: true,
    },
    {
        accessor: "predictedDate",
        Header: "Predicted Date",
        disableFilters: true,
    },
    {
        accessor: "agingBucket",
        Header: "Aging Bucket",
        disableFilters: true,
    }
]

export default columns;