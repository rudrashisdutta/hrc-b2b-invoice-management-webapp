import React, { Component } from 'react';
import Predict from './ControlButtons/Predict';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <div>
                    <Predict />
                </div>
            </div>
        );
    }
}

export default ControlPanel;