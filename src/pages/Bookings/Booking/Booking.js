/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const { user, isLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { serviceId } = useParams();
const [singleSevice,setSingleService]=useState({})
    useEffect(()=>{
        fetch(`https://secret-hamlet-89112.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSingleService(data)
        })

    },[serviceId]);


    if (isLoading) {
        return <Spinner className="my-5" animation="border" variant="success" />
    }
    // filter  the all requested booking of all user and find the all booking request  of a specific user to display 
    // const { name, fee, img, description } = singleSevice;
    


  

    const onSubmit = data => {
        if (confirm("Are you sure you want to book now??")) {
            alert('Booking successful!');
            axios.post('https://secret-hamlet-89112.herokuapp.com/bookingRequests', data, data.status = "Pending")
                .then(res => {
                    reset();
                })
        }
    }

    return (
       
        <div className="container">
            <h2 className="mt-5">Booking Your Choices</h2>
            <hr className="mx-auto"
                style={{ width: '25%', alignItems: 'center', color: 'black' }}
            />
            <div className="row">
                <div className=" col-sm-1 col-lg-6 g-4">
                    <Card className="card">
                        <Card.Img variant="top" src={singleSevice.img} height="300px" />
                        <Card.Body>
                            <Card.Title className="title">{singleSevice.name}</Card.Title>
                            <Card.Text> Fee:$ {singleSevice.fee} </Card.Text>
                            <Card.Text>{singleSevice.description} </Card.Text>
                        </Card.Body>
                    </Card>
                </div> 
                <div className="col-sm-1 col-lg-6 g-4">
                    <Card className="card h-100">
                        <Card.Body className="booking-info mx-s">
                            <h4 className="text-center">Book Now</h4>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <span>User name</span> <br />
                                <input {...register("name", { required: true })} value={user?.displayName} className="w-75" />
                                <span className="text-danger"> *can't change</span><br /><br />

                                <span>Nick name</span> <br />
                                <input {...register("nick_name", { maxLength: 20 })} placeholder="Nick Name" className="w-75" /> <br /> <br />

                                <span>Email</span> <br />
                                <input {...register("email", { required: true })} placeholder="Email" value={user?.email} className="w-75" />
                                <span className="text-danger"> *can't change</span><br /> <br />

                                <span>Service Id</span> <br />
                                <input {...register("ServiceId", { required: true, })} value={serviceId} className="w-75" /> <span className="text-danger"> *can't change</span><br /><br />

                                <span>Image </span> <br />
                                <input {...register("img", { required: true, })} value={singleSevice.img} className="w-75" /> <span className="text-danger"> *can't change</span><br /><br />

                                <span>Tour </span> <br />
                                <input {...register("tour_name", { required: true, })} value={singleSevice.name} className="w-75" /> <span className="text-danger"> *can't change</span><br /><br />

                                <span>Cost: $ </span> <br />
                                <input {...register("fee", { required: true, })} value={singleSevice.fee} className="w-75" /> <span className="text-danger"> *can't change</span><br /><br />
                                <span>Full Address</span> <br />
                                <textarea {...register("address", { required: true })} placeholder="Your Full Address*" className="w-75" /><span className="text-danger"> *Must</span> <br /> <br />
                                <span>Phone number</span> <br />
                                <input type='number' {...register("phone", { required: true, maxLength: 20 })} placeholder="Your Phone Number*" className="w-75" /><span className="text-danger"> *Must</span> <br /> <br />

                                <button type="submit" className="btn btn-warning text-white">Book Now</button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default Booking;