import './ControlPanel.css'
import React, { useState } from 'react';
import Refresh from './Control/Refresh';
import ViewControlButtons from './Control/ViewControlButtons';
import Search from './Control/Search';
import AlterControlButtons from './Control/AlterControlButtons';

export default function ControlPanel({setTableData, selectedFlatRows, isOneRowSelected, isRowSelected, updateTable, setUpdateTable}) {
    return (
        <div className='controlPanelParent'>
            <div className='controlPanel'>
                <div className='viewControl'>
                    <ViewControlButtons/>
                </div>
                <div className='refresh'>
                    <Refresh setTableData={setTableData}/>
                </div>
                <div className='search'>
                    <Search name='CUSTOMER ID'/>
                </div>
                <div className='alterControl'>
                    <AlterControlButtons setTableData={setTableData} selectedFlatRows={selectedFlatRows} isOneRowSelected={isOneRowSelected} isRowSelected={isRowSelected}/>
                </div>
            </div>
        </div>
    );
}