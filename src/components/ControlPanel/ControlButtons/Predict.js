import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ControlButton.css'
import { Button} from '@mui/material';

class Predict extends PureComponent {
    render() {
        return (
            <div>
                <Button variant="contained" className='controlButton'>PREDICT</Button>
            </div>
        );
    }
}

Predict.propTypes = {

};

export default Predict;