import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PopularService = (service) => {
    const { _id, name, img,fee, description } = service.service;
    return (// card for display popular services details
        <div className=" card-container col-sm-1 col-lg-4 g-4">
            <Card className="card bg-dark text-white">
                <Card.Img variant="top" src={img} height="300px" />
                <Card.Body>
                    <Card.Title className="title">Name: {name}</Card.Title>
                    <Card.Title className="title">Price: {fee}</Card.Title>
                    <Card.Text>{description.slice(0, 150)} </Card.Text>
                </Card.Body>
                <Link to={`booking/${_id}`}><button className="btn btn-primary bg-transparent my-3">Book Now</button> </Link>
            </Card>

        </div>
    );
};

export default PopularService;