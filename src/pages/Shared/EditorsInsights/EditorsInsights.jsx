import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const EditorsInsights = () => {
    return (
        <Row xs={1} md={3} className="g-4 mt-4">
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
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/happy-black-parents-with-kids-making-video-call-smart-phone-home_637285-11501.jpg?t=st=1718973611~exp=1718977211~hmac=50483ff9640dc9fc5e6dede6082bd2b4c965283290351649c41edcadcdc7b9aa&w=1380" />
                    <Card.Body>
                        <Card.Title>Child at home</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsights;