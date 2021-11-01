import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Menu.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
const menuActiveStyle = {
    fontWeight: "bold",
    color: "black"
};
const Menu = () => {
    const { user, logOut } = useAuth()
    return (
        // header main menu
        <>
            <Navbar collapseOnSelect expand="lg" className="bg py-3" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/home" className=""><img width="30px" src="https://i.ibb.co/S7gdGR6/pngwing-com-1.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavHashLink} to="/home#home" className="text-dark" activeStyle={menuActiveStyle}>HOME</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#about" className="text-dark" activeStyle={menuActiveStyle}>ABOUT</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#services" className="text-dark" activeStyle={menuActiveStyle}>SERVICES</Nav.Link>
                        {user?.email ?
                            <Nav.Link as={NavHashLink} to="/my-bookings#myBookings" className="text-black" activeStyle={menuActiveStyle}>MY BOOKINGS</Nav.Link>
                            : ""}
                        {user?.email ?
                            <Nav.Link as={NavHashLink} to="/manage-all-bookings#MangeAllBookings" className="text-black" activeStyle={menuActiveStyle}>MANAGE BOOKINGS</Nav.Link>
                            : ""}
                        {user?.email ?
                            <Nav.Link as={NavHashLink} to="/add-new-service" className="text-black" activeStyle={menuActiveStyle}>ADD SERVICES</Nav.Link>
                            : ""}
                        
                        <Nav.Link as={NavHashLink} to="/home#contact" className="text-black" activeStyle={menuActiveStyle}>CONTACT</Nav.Link>
                        <Navbar.Text className="text-black">

                        </Navbar.Text>

                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-primary ms-4 text-white">Log Out</Button> :
                            <Nav.Link as={NavLink} to="/login" activeStyle={menuActiveStyle} >LOGIN</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
                {

                    user?.email ? <a href="#login"><p className="px-3">{user?.displayName}</p></a> : <b></b>
                }
            </Navbar>

        </>
    );
};

export default Menu;

