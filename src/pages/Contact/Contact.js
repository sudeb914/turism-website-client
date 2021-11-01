import React from 'react';

const Contact = () => {
    return (// contact page
        <div className="container my-5 py-5" id="contact">
            <h3 className="text-dark fw-bold fs-1">Contact <span className="text-primary">US</span> </h3>
            <hr className="mx-auto"
                style={{ width: '25%', alignItems: 'center', color: 'black' }}
            />
            <h5 className="mt-5"><span className="text-primary fs-4 fw-bold">Hot Line:</span> +88019372101</h5>
            <h5><span className="text-primary fs-4 fw-bold">Hot Line:</span> +8529224599</h5>
            <h5><span className="text-primary fs-4 fw-bold"> Email:</span> bookingroom@gmail.com</h5>

        </div>
    );
};

export default Contact;