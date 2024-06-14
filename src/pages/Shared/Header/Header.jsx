import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container className='mb-5'>
            <div className='text-center my-3'>
                <img src={logo} alt="" />
                <h6 className='text-secondary mt-3'>Journalism Without Fear or Favour</h6>
                <h4 className='text-lg mt-3 mb-5'>{moment().format("dddd")}<span className='text-secondary'>{moment().format(", MMMM D, YYYY")}</span></h4>
            </div>
            <div className='d-flex gap-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;