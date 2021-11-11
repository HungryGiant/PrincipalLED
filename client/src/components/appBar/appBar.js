
import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap/';
import Logo from '../../images/led2.png';
import 'bootstrap/dist/css/bootstrap.css';
import './appBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Workorder from '../pages/Workorder';
import Report from '../pages/Report';
import Home from    '../pages/Home';

export default function AppBar() {
    return (
        <Router>
            <div>
            <Navbar bg="dark" variant="dark">
            <Nav>
                <Navbar.Brand as={Link} to={"/home"} id="logowrapper"><Image className="logo" src={Logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link as={Link} to={"/WorkOrder"}>Work Orders</Nav.Link>
                <Nav.Link as={Link} to={"/report"}>Report</Nav.Link>
                <NavDropdown className="links" title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Nav>
            </Navbar>
            </div>
            <div>       
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/WorkOrder" element={<Workorder />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
                </div>
        </Router>
    );
}