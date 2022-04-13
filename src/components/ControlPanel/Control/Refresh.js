import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';

class Refresh extends PureComponent {
    render() {
        return (
            <ButtonGroup size="large" aria-label="large button group" className='control'>
                <Button size='large' id='refresh-button' variant="outlined">↻</Button>
            </ButtonGroup>
        );
    }
}

Refresh.propTypes = {

};

export default Refresh;