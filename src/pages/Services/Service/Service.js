import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, fee, img, description } = service;
    return (
       
            <div className=" col-sm-1 col-lg-4 g-4">
            <Card className="card  bg-dark text-white">
                <Card.Img variant="top" src={img} height="300px" />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Title className="title">Price : {fee}</Card.Title>
                    <Card.Text>{description.slice(0, 150)} </Card.Text>
                </Card.Body>
                <Link to={`/booking/${_id}`}><button className="btn rounded-pill btn-primary my-3">Book Now</button> </Link>
            </Card>

        </div>
       
    );
};

export default Service;