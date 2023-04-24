/* eslint-disable */
import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import cv from '../assets/img/cv.svg';
import github from '../assets/img/github.svg';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto " />
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/inna-dragota-7592351b0/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/DragotaIV?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <img src={github} alt="" />
              </a>
              <a
                href="https://drive.google.com/file/d/1VczsuK_0e2hGiAbOC9ADP_mhCBztVdyl/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <img src={cv} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
