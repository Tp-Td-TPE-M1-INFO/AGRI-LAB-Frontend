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
            <Navbar sticky='top' className="header-content">
                <div className='container-fluid px-5 py-0'>
                    <div>
                        <Link to="/" className='logo-container'>
                            <img src={Logo} alt="Logo" className='logo' width={50} height={50}/> 
                            <Typography 
                                fontSize={"19px"}>
                                AGRILAB<span style={{color:"var(--primary-900)",fontSize:"3rem"}}>.</span>
                            </Typography>                               
                        </Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar"/>
                    <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:"var(--white)", padding:"0", justifyContent:"end"}}>
                        <Nav>
                            <div><Link to='/' className='nav-item'>Home</Link></div>
                            <div><Link to='/' className='nav-item'>Library</Link></div>
                        </Nav>
                        <StyledButton to="/signin" label="Log In" bg="var(--primary-900)" fg="var(--white)"/>
                    </Navbar.Collapse>
                </div>

            </Navbar>
        </div>
    )
}

export default Header