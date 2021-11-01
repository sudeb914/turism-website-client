import React from 'react';
import useAuth from '../../../hooks/useAuth';
import PopularService from '../PopularService/PopularService';

const PopularServices = () => {
    const { services } = useAuth()

    return (
        <div className="container my-5 py-5">
            <h2 className="text-dark fw-bold fs-1">Popular <span className="text-primary">Services</span></h2>
            <hr className="mx-auto"
                style={{ width: '25%', alignItems: 'center', color: 'black' }}
            />
            <div className="row">
                {/// map all services and send each service data to popular service content
                    services.slice(1, 5).map(service => <PopularService
                        key={service._id}
                        service={service}
                    ></PopularService>)
                }
            </div>


        </div>
    );
};

export default PopularServices;