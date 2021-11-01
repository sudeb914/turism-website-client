import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    // load all services
    useEffect(() => {
        fetch(`https://secret-hamlet-89112.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="container my-5 py-5" id="services">
            <h2 className="text-dark fs-1 fw-bold">Our <span className="text-primary">Services</span></h2>
            <hr className="mx-auto"
                style={{ width: '25%', alignItems: 'center', color: 'black' }}
            />
            <div className="row">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;