import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';

class ViewControlButtons extends PureComponent {
    render() {
        return (
            <ButtonGroup size="large" aria-label="large button group" className='control'>
                <Button size='large' id='predict-button' variant="contained">PREDICT</Button>
                <Button size='large' id='analytics-button' className='middleButton' variant="outlined">ANALYTICS VIEW</Button>
                <Button size='large' id='advance-search-button' variant="outlined">ADVANCE SEARCH</Button>
            </ButtonGroup>
        );
    }
}

ViewControlButtons.propTypes = {

};

export default ViewControlButtons;