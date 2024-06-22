import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='w-50 mx-auto mt-5'>
           <h1 className='text-center mb-3'>Terms and Conditions</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia, temporibus fugit, nesciunt, ratione porro totam repellendus illum tenetur possimus in minus harum corporis velit laudantium adipisci eos inventore voluptatem aliquid iusto distinctio necessitatibus repellat. Facere amet aut neque. Neque cumque eius laborum quae laudantium corporis necessitatibus quam temporibus voluptatibus voluptas aspernatur pariatur nihil expedita, beatae praesentium aut voluptate dicta. Saepe nisi accusantium soluta explicabo est molestias reiciendis voluptatibus magnam magni neque, asperiores facilis expedita hic reprehenderit, quis amet adipisci incidunt exercitationem aliquid aliquam omnis fuga provident! Repellendus maiores nostrum adipisci odit voluptates. Quaerat quibusdam laudantium eveniet doloribus. Ipsum, dolor.</p>
           <ul>
            <li className='mb-2'>Sample Text</li>
            <li className='mb-2'>Sample Text</li>
            <li className='mb-2'>Sample Text</li>
            <li className='mb-2'>Sample Text</li>
            <li className='mb-2'>Sample Text</li>
           </ul>
           <p className='text-center'>Go back to <Link className='text-decoration-none' to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;