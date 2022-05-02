import React, { useEffect, useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy, useRowSelect } from 'react-table'
import './TableView.css'
import COLUMNS from '../../../utils/Columns'
import { Checkbox, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Button, ButtonGroup, TextField, Popper, Grow, Paper, MenuList, MenuItem, ClickAwayListener  } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';

export default function TableView({tableData, setTableData, setSelectedFlatRows, setIsOneRowSelected, setIsRowSelected, updateTable}) {
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
        row,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        rowCount,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows
      } = useTable({
        columns,
        data,
        initialState: { pageSize: 10 }
      }, useSortBy, usePagination, useRowSelect, (hooks) => {
          hooks.visibleColumns.push((columns) => {
              return [
                  {
                      accessor: "selection",
                      Header: ({ getToggleAllRowsSelectedProps}) => (
                          <Checkbox {...getToggleAllRowsSelectedProps()}/>
                      ),
                      Cell: ({row}) => (
                          <Checkbox {...row.getToggleRowSelectedProps()} color="primary"/>
                      ),
                      disableSortBy: true
                  }, ...columns
              ]
          })
      })

      useEffect(() => {
        try {
            setSelectedFlatRows(selectedFlatRows);
            setIsOneRowSelected(selectedFlatRows.length === 1 ? true : false);
            setIsRowSelected(selectedFlatRows.length > 0 && selectedFlatRows.length < 40 ? true : false);
        } catch (error) {
            console.error(error);
        }
      });
      
    


    const {pageIndex} = state

    //Functionality for Button Group to select number of invoices to show per page
    const options = [10, 15, 30, 50, 100, 200]
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
      };
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setPageSize(options[index])
        setOpen(false);
      };
    
      const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
      //Functionality for Button Group to select number of invoices to show per page {END}

    return (
        <div className='tableView' align="center">
            <TableContainer className='tableContainer'>
                <Table stickyHeader className='table' aria-label="sticky table" {...getTableProps()}>
                    <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow className='tableHead' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell className='tableCell' {...column.getHeaderProps(column.getSortByToggleProps())}>{
                                column.render('Header')}
                                <span>
                                {
                                    column.isSorted ? ' ' + (column.isSortedDesc ? 'ᐁ' : 'ᐃ') : ''
                                }
                                </span>
                            </TableCell>
                        ))}
                        </TableRow>
                    ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                        <TableRow className='tableRow' id={row.sl_no} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return <TableCell className='tableCell' {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                            })}
                        </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
                </TableContainer>
            <div align='center' className='tableFunctions'>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" align="center">
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
                >
                <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                    transformOrigin:
                        placement === 'center top'
                    }}
                >
                    <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                            <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            >
                            {option}
                            </MenuItem>
                        ))}
                        </MenuList>
                    </ClickAwayListener>
                    </Paper>
                </Grow>
                )}
            </Popper>
            <br/><br/><br/>
            <ButtonGroup size="large" aria-label="large button group" align="center" className="alterPageButtonGroup">
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