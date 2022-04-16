import './Header.css'
import React, { useState } from 'react';
import companyLogo from '../../asset/companyLogo.svg'
import HRCLogo from '../../asset/logo.svg'

export default function Header(props) {
    return (
        <div>
            <div className='header'>
                <div className='companyName'>
                    <a href='/'>
                        <img src={companyLogo} className='AppLogo' alt='Company Logo'/>
                    </a>
                    <span>SB Company</span>
                </div>
                <div className='hrcLogo'>
                    <a href='/'>
                        <img src={HRCLogo} alt='Highradius Logo'/>
                    </a>
                </div>
                <div className='heading'>
                    <p>INVOICE LIST</p>
                </div>
            </div>
        </div>
    );
}