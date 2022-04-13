import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';

class AlterControlButtons extends PureComponent {
    render() {
        return (
            <ButtonGroup size="large" aria-label="large button group" className='alter control'>
                <Button size='large' id='add-button' variant="outlined">ADD</Button>
                <Button size='large' id='edit-button' className='middleButton' variant="outlined">EDIT</Button>
                <Button size='large' id='delete-button' variant="outlined">DELETE</Button>
            </ButtonGroup>
        );
    }
}

AlterControlButtons.propTypes = {

};

export default AlterControlButtons;