import './DataUnit.css'
import React, { useState } from 'react';
import ControlPanel from '../ControlPanel/ControlPanel'
import TableView from './Table/TableView';

export default function DataUnit(props) {

    

    return (
        <div className='dataUnit'>
            <ControlPanel/>
            <TableView id="data"/>
        </div>
    );
}