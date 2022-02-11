import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { Code, Mail, Phone, Smartphone, Star, User } from "react-feather"

const AboutPage = ({ id }) => (
  <section className="ptPage ptPage1" id={id}>
    <div className="ptContent ptContentFull">
      <div className="ptScrollPdd">
        <div className="mainTitle">
          <span>
            <User size={24} />
            About Me
          </span>
        </div>
        <div className="boxBio">
          <Row>
            <Col md={4}>
              <div className="personImg">
                <StaticImage />
              </div>
            </Col>
            <Col md={7}>
              <div className="infoBio">
                <p>
                  I’m a Front End Developer. I have a Passion for Creating
                  Clean, Beautiful, Interactive, Minimalistic, Responsive and
                  User Friendly UI, Developed by Modular, Scalable and
                  Functional Code. When, while the lovely valley teems with
                  vapour around me, I have created more websites, most of which
                  required great skills and tricks to be done perfectly.
                </p>
                <div className="langStatus">
                  <div className="oneLang">
                    <div className="starInner">
                      <h5 className="langName">English</h5>
                      <div className="langStars">
                        <Star size={24} />
                        <Star size={24} />
                        <Star size={24} />
                        <Star size={24} />
                        <Star size={24} />
                      </div>
                    </div>
                    <span className="langHead">(Intermediate)</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="boxDetails boxInner">
          <div className="boxTitle">
            <h6>Personal Informatika</h6>
          </div>
          <div className="boxContent">
            <Row>
              <Col md={6}>
                <ul className="listUnstyled">
                  <li className="oneInfo">
                    <User size={24} />
                    <span>Muhammad H. Asari</span>
                  </li>
                  <li className="oneInfo">
                    <Mail size={24} />
                    <span>example@sample.com</span>
                  </li>
                  <li className="oneInfo">
                    <Phone size={24} />
                    <span>+8273647</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className="boxSkills boxInner">
          <div className="boxTitle">
            <h6>My Skills</h6>
          </div>
          <div className="boxContent">
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="skillChart">
                  <span className="chart" data-percent="80">
                    <span className="percent">0</span>
                  </span>
                  <h5>HTML & CSS</h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="boxServices boxInner">
          <div className="boxTitle">
            <h6>My Services</h6>
          </div>
          <div className="boxContent">
            <Row>
              <Col md={6}>
                <div className="serviceBox">
                  <div className="boxIcon">
                    <Smartphone size={24} />
                  </div>
                  <div className="boxText">
                    <h6>Fully Response</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
                <div className="serviceBox mb-0">
                  <div className="boxIcon">
                    <Code size={24} />
                  </div>
                  <div className="boxText">
                    <h6>Clean Code</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="serviceBox">
                  <div className="boxIcon">
                    <Smartphone size={24} />
                  </div>
                  <div className="boxText">
                    <h6>Fully Response</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
                <div className="serviceBox mb-0">
                  <div className="boxIcon">
                    <Code size={24} />
                  </div>
                  <div className="boxText">
                    <h6>Clean Code</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="boxHobbies boxInner"></div>
        <div className="boxTestimonials"></div>
      </div>
    </div>
  </section>
)

export default AboutPage
