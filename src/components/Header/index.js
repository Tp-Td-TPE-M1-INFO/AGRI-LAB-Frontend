import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Typography, useMediaQuery } from '@mui/material';
import "./style.css"

import Logo from '../../assets/logo.png'
import StyledButton from '../Button';

const Header = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:990px)");
    const navigate = useNavigate()
    
    return (
        <div className="header">
            <Navbar sticky='top' expand="lg" className="header-content">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className='logo-container'>
                            <img src={Logo} alt="Logo" className='logo'/> 
                            <Typography 
                                fontSize={"2rem"}>
                                AGRILAB<span style={{color:"var(--primary-900)",fontSize:"3rem"}}>.</span>
                            </Typography>                               
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar"/>
                    <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:"var(--white)", padding:"1rem 0", justifyContent:"end"}}>
                        <Nav>
                            <Navbar.Brand><Link to='/' className='nav-item'>Home</Link></Navbar.Brand>
                            <Navbar.Brand><Link to='/' className='nav-item'>Meida libary</Link></Navbar.Brand>
                        </Nav>
                        <StyledButton to="/signin" label="Log In" bg="var(--primary-900)" fg="var(--white)"/>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Header