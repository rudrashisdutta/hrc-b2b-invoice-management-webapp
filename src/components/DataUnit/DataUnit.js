import './DataUnit.css'
import React, { Component } from 'react';
import TableView from './Table/TableView';
import ControlPanel from '../ControlPanel/ControlPanel'

class DataUnit extends Component {
    render() {
        return (
            <div className='dataUnit'>
                <ControlPanel/>
                <TableView id="data"/>
            </div>
        );
    }
}

export default DataUnit;