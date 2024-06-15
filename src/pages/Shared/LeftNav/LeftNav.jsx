import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err.message))
    }, []);


    return (
        <div>
            <h4 className='ps-2 mb-3'>All Category</h4>
            <ListGroup className=''>
                {
                    categories.map(category => <Link className='text-decoration-none p-2'><ListGroup.Item className='bg-custom-dark border-none mb-1 h5 text-secondary' key={category.id}>{category.name}</ListGroup.Item></Link>)
                }
            </ListGroup>
        </div>
    );
};

export default LeftNav;