import './DataUnit.css'
import React, { Component } from 'react';
import TableView from './Table/TableView';

class DataUnit extends Component {
    render() {
        return (
            <div className='dataUnit'>
                <TableView id="data"/>
            </div>
        );
    }
}

export default DataUnit;