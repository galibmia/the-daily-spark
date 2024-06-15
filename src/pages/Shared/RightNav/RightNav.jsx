import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import "./RightNav.css"


const RightNav = () => {
    return (
        <div>
            <div>
                <Button className='w-75 mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button className="w-75" variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className='mt-5'>
                <h4 className='text-secondary mb-2 ps-1'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='py-3 ps-3 text-secondary d-flex align-items-center gap-1 h5 table-hover'><FaFacebookF className='text-primary' /> <span>Facebook</span></ListGroup.Item>
                    <ListGroup.Item className='py-3 ps-3 text-secondary d-flex align-items-center gap-1 h5'><FaTwitter className='text-primary' /> <span>Twitter</span></ListGroup.Item>
                    <ListGroup.Item className='py-3 ps-3 text-secondary d-flex align-items-center gap-1 h5'><FaInstagram className='text-danger' /> <span>Instagram</span></ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

            <div className="promo-section d-flex flex-column justify-content-center align-items-center text-center text-white">
                <h1>Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-danger">Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;