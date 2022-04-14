import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';
import TableView from '../../DataUnit/Table/TableView';

class Refresh extends PureComponent {
    reloadData = () => {
        window.location.reload(false);
        console.log('reloaded!')
    }
    render() {
        return (
            <ButtonGroup size="large" aria-label="large button group" className='control'>
                <Button size='large' id='refresh-button' variant="outlined" onClick={this.reloadData}>↻</Button>
            </ButtonGroup>
        );
    }
}

Refresh.propTypes = {

};

export default Refresh;