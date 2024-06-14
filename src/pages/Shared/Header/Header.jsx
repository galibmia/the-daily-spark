import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <div className='text-center mt-3'>
                <img src={logo} alt="" />
                <h6 className='text-secondary mt-3'>Journalism Without Fear or Favour</h6>
                <h4 className='text-lg mt-3 mb-5'>{moment().format("dddd")}<span className='text-secondary'>{moment().format(", MMMM D, YYYY")}</span></h4>
            </div>
        </div>
    );
};

export default Header;