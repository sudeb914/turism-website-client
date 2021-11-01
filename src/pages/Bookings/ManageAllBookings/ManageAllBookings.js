import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './ManageAllBookings.css';

const ManageAllBookings = () => {
    const [reqBookings, setReqBookings] = useState({});
    const { user } = useAuth();
    const [status, setStatus] = useState("");

    const reqBookingServices = Object.values(reqBookings);

    useEffect(() => {
        fetch('https://secret-hamlet-89112.herokuapp.com/bookingRequests')
            .then(res => res.json())
            .then(data => setReqBookings(data));
    }, []);

    const handleUpdate = id => {
        fetch(`https://secret-hamlet-89112.herokuapp.com/status/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Approve" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.updatedCount) {
                    setStatus("Approved")
                }
            })
    }
    console.log(status);

    const handleDelete = id => {
        console.log('id', id);
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

    return (
        < div className="my-5" id="MangeAllBookings">
            <div className="row ">
                <div className="col-sm-1 col-lg-4"></div>
                <div className="col-sm-1 col-lg-4">
                    <h2 className="text-primary fs-1 fw-bold">Booking Management</h2>
                    <hr className="mx-auto"
                        style={{ width: '75%', alignItems: 'center', color: 'black' }}
                    />
                    <h3 className="text-secondary">Dashboard</h3>
                </div>
                <div className="col-sm-1 col-lg-4 ">
                    <div className="row">
                        <div className="col-sm-1 col-lg-5"></div>
                        <div className="col-sm-1 col-lg-7">
                            <div className="mx-3 user-profile">
                                <p className="fw-bold">User Profile</p>
                                <div>
                                    <img src={user.photoURL} alt="" className="rounded-circle" width="70" />
                                </div>
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                                {console.log(user)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {reqBookingServices.length === 0 ? <p className="text-danger">Not Found any Booking</p> :
                    reqBookingServices.map((reqBooking, index) => (
                        <div className=" col-sm-1 col-lg-12 g-4" key={index} >
                            <div className="text-start card p-4">
                                <div className="row">
                                    <div className="col-sm-1 col-lg-4">
                                        <div className="row ">
                                            <div className="col-5">
                                                <p className="text-primary"> <u>Service Name:</u> </p>
                                                <small>{reqBooking.tour_name}</small>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-primary"> <u>Service Id:</u></p>
                                                <small>{reqBooking.ServiceId}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 col-lg-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-primary"> <u>User Name:</u> </p>
                                                <small>{reqBooking.name}</small>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-primary"> <u>Nick Name:</u></p>
                                                <small> {reqBooking.nick_name}</small>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-1">
                                        <div className="row-12">
                                            <div className="co-12">
                                                <p className="text-primary"> <u>Phone:</u></p>
                                                <small>{reqBooking.phone}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 col-lg-4  ">
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-primary"> <u>Email:</u> </p>
                                                <small> {reqBooking.email}</small>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-primary"> <u>Address:</u></p>
                                                <small>{reqBooking.address}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-center mt-3'>
                                        <button onClick={() => handleUpdate(reqBooking._id)} className="btn btn-primary mx-1">Approve</button>
                                        <button onClick={() => handleDelete(reqBooking._id)} className="btn btn-danger mx-1"> Delete </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageAllBookings;