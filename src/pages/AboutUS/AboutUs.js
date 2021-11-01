import React from 'react';
import './About.css';
const AboutUs = () => {
    return (// this is about page
        <div className="bg-about">
            <div className="container my-5 py-5 " id="about">
                <h2 className="text-dark fw-bold fs-1">About Us</h2>
                <hr className="mx-auto"
                    style={{ width: '25%', alignItems: 'center', color: 'black' }}
                />
                <h3>Welcome To Our Website</h3>
                <p className="my-5">
                The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 milli</p>

                <div className="text-start pt-5">
                    <h4 className="my2 text-center">Our team</h4>

                    We’ve been travelling the world for over 30 years, building a reputation for providing quality travel content that’s inspiring, engaging and informative. With all of our guides and features written and updated by a global network of expert travel writers that includes some of the best names in the business, we pride ourselves on producing content that stands out from the crowd.We’ve been travelling the world for over 30 years, building a reputation for providing quality travel content that’s inspiring, engaging and informative. With all of our guides and features written and updated by a global network of expert travel writers that includes some of the best names in the business, we pride ourselves on producing content that stands out from the crowd.  


                </div>
            </div>
        </div>

    );
};

export default AboutUs;