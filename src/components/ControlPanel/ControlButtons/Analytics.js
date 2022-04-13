import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ControlButton.css'
import { Button, createTheme} from '@mui/material';

class Analytics extends PureComponent {
    render() {
        return (
            <div>
                <Button variant="contained" className='controlButton'>ANALYTICS VIEW</Button>
            </div>
        );
    }
}

Analytics.propTypes = {

};

export default Analytics;