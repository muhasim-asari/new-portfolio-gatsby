import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { Calendar, Code, Film, Flag, Mail, MapPin, Phone, Smartphone, Star, User } from "react-feather"

import * as styles from "./aboutPage.module.scss"

const AboutPage = ({ id }) => (
  <section className="ptPage">
    <div className="ptContent ptContentFull}">
      <div className="ptScrollPdd">
        <div className="mainTitle">
          <span className="headingText">
            <User size={38} />
            About Me
          </span>
        </div>
        <div className={styles.boxBio}>
          <Row>
            <Col md={4}>
              <div className={styles.personImg}>
                <StaticImage
                  src="../../../../static/images/me-photos.jpg"
                  width={280}
                  height={320}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="photos muhammad hasim"
                />
              </div>
            </Col>
            <Col md={7}>
              <div className={styles.infoBio}>
                <p>
                  I’m a Front End Developer. I have a Passion for Creating
                  Clean, Beautiful, Interactive, Minimalistic, Responsive and
                  User Friendly UI, Developed by Modular, Scalable and
                  Functional Code. When, while the lovely valley teems with
                  vapour around me, I have created more websites, most of which
                  required great skills and tricks to be done perfectly.
                </p>
                <div className={styles.langStatus}>
                  <div className={styles.oneLang}>
                    <div className={styles.starInner}>
                      <h5 className={styles.langName}>Indonesia</h5>
                      <div className={styles.langStars}>
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.oneLang}>
                    <div className={styles.starInner}>
                      <h5 className={styles.langName}>English</h5>
                      <div className={styles.langStars}>
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} color="#333333" fill="#333333" />
                        <Star size={22} />
                        <Star size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={`${styles.boxDetails} ${styles.boxInner}`}>
          <div className={styles.boxTitle}>
            <h6>My Personal Information</h6>
          </div>
          <div className={styles.boxContent}>
            <Row>
              <Col md={6}>
                <ul className="listUnstyled">
                  <li className={styles.oneInfo}>
                    <User size={22} />
                    <span>Muhammad Hasim Asari</span>
                  </li>
                  <li className={styles.oneInfo}>
                    <Mail size={22} />
                    <span>muhasim2asari@gmail.com</span>
                  </li>
                  <li className={styles.oneInfo}>
                    <Phone size={22} />
                    <span>+62 821 4136 4800</span>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="listUnstyled">
                  <li className={styles.oneInfo}>
                    <Calendar size={22} />
                    <span>25 Years Old</span>
                  </li>
                  <li className={styles.oneInfo}>
                    <MapPin size={22} />
                    <span>Boyolali, Central Java</span>
                  </li>
                  <li className={styles.oneInfo}>
                    <Flag size={22} />
                    <span>Indonesia</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className={`${styles.boxSkills} ${styles.boxInner}`}>
          <div className={styles.boxTitle}>
            <h6>My Skills</h6>
          </div>
          <div className={styles.boxContent}>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className={styles.skillChart}>
                  <span className={styles.chart} data-percent="80">
                    <span className={styles.percent}>0</span>
                  </span>
                  <h5>HTML & CSS</h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={`${styles.boxServices} ${styles.boxInner}`}>
          <div className={styles.boxTitle}>
            <h6>My Services</h6>
          </div>
          <div className={styles.boxContent}>
            <Row>
              <Col md={6}>
                <div className={styles.serviceBox}>
                  <div className={styles.boxIcon}>
                    <Smartphone size={24} />
                  </div>
                  <div className={styles.boxText}>
                    <h6>Fully Response</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
                <div className={`${styles.serviceBox} mb-0`}>
                  <div className={styles.boxIcon}>
                    <Code size={24} />
                  </div>
                  <div className={styles.boxText}>
                    <h6>Clean Code</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.serviceBox}>
                  <div className={styles.boxIcon}>
                    <Smartphone size={24} />
                  </div>
                  <div className={styles.boxText}>
                    <h6>Fully Response</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
                <div className={`${styles.serviceBox} mb-0`}>
                  <div className={styles.boxIcon}>
                    <Code size={24} />
                  </div>
                  <div className={styles.boxText}>
                    <h6>Clean Code</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={`${styles.boxHobbies} ${styles.boxInner}`}>
          <div className={styles.boxTitle}>
            <h6>My Hobbies</h6>
          </div>
          <div className={`${styles.boxContent} ${styles.boxContentFlex}`} style={{ width: "auto", flexWrap: "wrap" }}>
            <div className={styles.oneHobbie}>
              <Film size={24} />
              <span>Movies</span>
            </div>
            <div className={styles.oneHobbie}>
              <Film size={24} />
              <span>Movies</span>
            </div>
            <div className={styles.oneHobbie}>
              <Film size={24} />
              <span>Movies</span>
            </div>
            <div className={styles.oneHobbie}>
              <Film size={24} />
              <span>Movies</span>
            </div>
            <div className={styles.oneHobbie}>
              <Film size={24} />
              <span>Movies</span>
            </div>
            <div className={styles.oneHobbie}>
              <Film size={24} />
              <span>Movies</span>
            </div>
          </div>
        </div>
        <div className={`${styles.boxTestimonials} ${styles.boxInner}`}>
          <div className={styles.boxTitle}>
            <h6>My Testimonial</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutPage
