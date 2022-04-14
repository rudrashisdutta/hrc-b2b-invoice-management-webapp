import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import { useTable, usePagination } from 'react-table'
import './TableView.css'
import COLUMNS from '../../../utils/Columns'
import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Button, ButtonGroup, TextField } from '@mui/material';
import axios from 'axios';

TableView.propTypes = {
    
};

function TableView(props) {
    const [tableData, setTableData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/HRC_java/View").then(response => setTableData(response.data));
    },[])
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => tableData, [tableData])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize
      } = useTable({
        columns,
        data,
        initialState: { pageSize: 10 }
      }, usePagination)

      const {pageIndex} = state

    return (
        <div className='tableView' align="center">
            <section className='tableContainer'>
                <Table className='table' {...getTableProps()}>
                    <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow className='tableHead' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell className='tableCell' {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                        ))}
                        </TableRow>
                    ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                        <TableRow className='tableRow' {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return <TableCell className='tableCell' {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                            })}
                        </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </section>
            <div align='center' className='tableFunctions'>
            <ButtonGroup size="large" aria-label="large button group" align="center">
                <Button className='Button' variant="outlined" onClick={() =>gotoPage(0)} disabled={!canPreviousPage}><b>ᐊᐊ</b></Button>
                <Button className='Button' variant="outlined" onClick={previousPage} disabled={!canPreviousPage}><b>ᐊ</b></Button>
                <span className='message'>
                    <TextField id="pgno" type='number' label={'PAGE ' + (pageIndex + 1) + ' OF ' + pageCount + ' PAGES'} variant="outlined" onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : pageIndex
                        gotoPage(pageNumber)
                    }}/>
                </span>
                <Button className='Button' variant="outlined" onClick={nextPage} disabled={!canNextPage}><b>ᐅ</b></Button>
                <Button className='Button' variant="outlined" onClick={() =>gotoPage(pageCount - 1)} disabled={!canNextPage}><b>ᐅᐅ</b></Button>
            </ButtonGroup>
            </div>
        </div>
    );
}

export default TableView;