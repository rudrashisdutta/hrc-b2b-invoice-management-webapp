import './Header.css'
import React, { PureComponent } from 'react';
import companyLogo from '../../asset/companyLogo.svg'
import HRCLogo from '../../asset/logo.svg'

class Header extends PureComponent {
    render() {
        return (
            <div>
                <section className='header'>
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
                    <br/>
                    <div className='companyName'>
                        <p><u>Invoice List</u></p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;