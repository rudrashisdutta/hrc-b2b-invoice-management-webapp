import './DataUnit.css'
import React, { useState } from 'react';
import ControlPanel from '../ControlPanel/ControlPanel'
import TableView from './Table/TableView';

export default function DataUnit(props) {

    const [selectedFlatRows, setSelectedFlatRows] = useState([]);
    const [isOneRowSelected, setIsOneRowSelected] = useState(false);
    const [isRowSelected, setIsRowSelected] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);
    const [defaultFilterValue, setDefaultFilterValue] = useState(null);
    const [invoiceIDFilterValue, setinvoiceIDFilterValue] = useState(null);

    return (
        <div className='dataUnit'>
            <ControlPanel selectedFlatRows={selectedFlatRows} isOneRowSelected={isOneRowSelected} isRowSelected={isRowSelected} updateTable={updateTable} setUpdateTable={setUpdateTable}/>
            <TableView setSelectedFlatRows={setSelectedFlatRows} setIsOneRowSelected={setIsOneRowSelected} setIsRowSelected={setIsRowSelected} updateTable={updateTable}/>
        </div>
    );
}