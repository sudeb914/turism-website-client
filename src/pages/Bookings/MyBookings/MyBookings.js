/* eslint-disable no-restricted-globals */
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const MyBookings = () => {
    const [reqBookings, setReqBookings] = useState({});
    const { user } = useAuth();


    // convert object as array
    const reqBookingServices = Object.values(reqBookings);
    // load and set data  of client booking request  from database 
    useEffect(() => {
        fetch('https://secret-hamlet-89112.herokuapp.com/bookingRequests',)
            .then(res => res.json())
            .then(data => {
                setReqBookings(data);

            })
    }, []);


    const myBookingReqs = reqBookingServices.filter(service => service.email === user.email);
    console.log(myBookingReqs);

    // handle delete item
    const handleDelete = id => {
        if (confirm("Are you sure you want to delete your booking request??")) {
            alert('Deleted successful!');
            const url = `https://secret-hamlet-89112.herokuapp.com/bookingRequests/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = reqBookingServices.filter(reqBookingService => reqBookingService._id !== id)
                    setReqBookings(remainingData);
                })
        }
    }
    return (
        <div className="container my-5" id="myBookings">
            <h2>Your Bookings</h2>
            <hr className="mx-auto"
                style={{ width: '25%', alignItems: 'center', color: 'black' }}
            />
            <div className="row">
                {myBookingReqs.length === 0 ? <p>You don't have any booking!</p> :
                    myBookingReqs.map((myBookingReq, index) => (
                        <div className=" col-sm-1 col-lg-4 g-4" key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={myBookingReq.img} height="185px" />
                                <Card.Body>
                                    <Card.Title>{myBookingReq.tour_name}</Card.Title>
                                    <p>Cost: ${myBookingReq.fee}</p>
                                    <p>User: {myBookingReq.name}</p>

                                    <div className="d-flex">
                                        <Button className="btn btn-primary mx-1">{myBookingReq.status}</Button>
                                        <Button onClick={() => handleDelete(myBookingReq._id)} className="btn btn-danger mx-1">Delete</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default MyBookings;