import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaShareAlt, FaStar } from 'react-icons/fa';
import { FaEye, FaRegBookmark, FaRegStar } from 'react-icons/fa6';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex'>
                <Image style={{ height: '40px' }} className='me-2' src={author?.img} roundedCircle />
                <div className='flex-grow-1'>
                    <h6 className='my-0 font-weight-bold'>{author?.name}</h6>
                    <p className='mb-0'><small>{moment(author?.published_date).format('D-MM-yyyy')}</small></p>
                </div>
                <div className='mt-2'>
                    <FaRegBookmark className='me-2 text-secondary'></FaRegBookmark>
                    <FaShareAlt className='me-2 text-secondary'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='mb-2'>{title}</Card.Title>
                <Card.Img className='mb-2' src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details} </> : <>{details.slice(0, 250)}... <br /><Link to={`/news/${_id}`} className='text-decoration-none text-warning'>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                        readonly
                        className='me-2 text-warning'
                    ></Rating>
                    <span className='mt-1'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>  {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;