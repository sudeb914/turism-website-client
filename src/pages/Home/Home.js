import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AboutUs from '../AboutUS/AboutUs';
import Contact from '../Contact/Contact';
import Slider from '../Header/Slider/Slider';
import PopularServices from '../PopularServices/PopularServices/PopularServices';
import Services from '../Services/Services/Services';


const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className="my-5" animation="border" variant="success" />
    }
    return (
        <div id="home">
            <Slider></Slider>
            <Services></Services>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>

    );
};

export default Home;