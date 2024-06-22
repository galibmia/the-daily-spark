import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-daily-spark-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err.message))
    }, []);

    return (
        <div>
            <h4 className='ps-2 mb-3'>All Category</h4>
            <ListGroup className=''>
                {
                    categories.map(category => (
                        <ListGroup.Item
                            as={Link}
                            to={`/category/${category.id}`}
                            className='text-decoration-none p-2 bg-custom-dark border-none mb-1 h5 text-secondary'
                            key={category.id}
                        >
                            {category.name}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <Row xs={1} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/full-shot-cute-kid-sitting-couch-with-laptop_23-2149102976.jpg?t=st=1718973011~exp=1718976611~hmac=dd06e5acbd0795624fb4376a7b805e04bd40410b307c4e810bdd277b05e6741d&w=1380" />
                        <Card.Body>
                            <Card.Title>Child at home</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/retro-camera_181624-26107.jpg?t=st=1718973405~exp=1718977005~hmac=579356d615ad4096ccaedda5233d4ddd02689258ffef70cc22e889b8a88f81af&w=1380" />
                        <Card.Body>
                            <Card.Title>Retro Camera</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/happy-black-parents-with-kids-making-video-call-smart-phone-home_637285-11501.jpg?t=st=1718973611~exp=1718977211~hmac=50483ff9640dc9fc5e6dede6082bd2b4c965283290351649c41edcadcdc7b9aa&w=1380" />
                        <Card.Body>
                            <Card.Title>Family Video Call</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;
