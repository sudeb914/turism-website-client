import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slider-1.jpg'
import slide2 from '../../../images/slider-2.jpg'
import slide3 from '../../../images/slider-3.jpg'

const Slider = () => {
    return (
        <div className="header">
            <Carousel>
                <Carousel.Item className="slide-h">
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        height="700px"
                    />
                    
                </Carousel.Item>
                <Carousel.Item className="slide-h">
                    <img
                        className="d-block w-100 "
                        src={slide2}
                        alt="Second slide"
                        height="700px"
                    />

                    
                </Carousel.Item>
                <Carousel.Item className="slide-h">
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        height="700px"
                    />

                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;