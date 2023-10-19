import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import myImg from '../../Assets/Projects/avatar.svg';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME
              {' '}
              <span className="purple"> INTRODUCE </span>
              {' '}
              MYSELF
            </h1>
            <p className="home-about-body">
              I&apos;m Tamoor, a Full Stack Web Developer currently enrolled in Microverse.
              I can help you build a product, feature, or website.
              Take a look at some of my work and experience!
              If you like what you see and have a project you need coded,
              don&apos;t hesitate to contact me.
              <br />
              <br />
              I fell in love with programming and have acquired proficiency in classics like
              <i>
                <b className="purple"> HTML, CSS , Javascript, React, and Ruby , Ruby on Rails. </b>
              </i>
              <br />
              <br />
              My field of interest includes building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
                {' '}
                as well as areas related to
                {' '}
                <b className="purple">
                  Front-end & back-end development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with
              {' '}
              <b className="purple">Node.js</b>
              {' '}
              and
              <i>
                <b className="purple">
                  {' '}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
  &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>

            {/* Contact Form */}
            <p className="contact">Contact Me</p>
            <form action="https://formspree.io/f/xwkjovpk" method="POST">
              <div className="input-holder">
                <label htmlFor="name">Write your name</label>
                <input
                  type="text"
                  placeholder="Write your name"
                  required
                  maxLength="30"
                  name="inputName"
                  id="name" // Make sure the 'id' matches the 'htmlFor'
                  className="koko"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="email">Write your email</label>
                <input
                  id="email" // Make sure the 'id' matches the 'htmlFor'
                  type="email"
                  placeholder="Write your email here"
                  required
                  name="email"
                  className="koko"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="message">Write your message</label>
                <textarea
                  placeholder="Write your message here"
                  rows="10"
                  id="message" // Make sure the 'id' matches the 'htmlFor'
                  required
                  name="message"
                  maxLength="500"
                  className="koko"
                />
                <p className="msg" />
              </div>
              <button className="submit" type="submit">Get In Touch</button>
              <div className="black-line" />
            </form>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to
              {' '}
              <span className="purple">connect </span>
              with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tamoorsaeed22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/tamoorsaeed9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tamoorsaeed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tamoorsaeed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
