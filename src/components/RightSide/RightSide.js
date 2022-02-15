import React from 'react';
import { Col } from 'react-bootstrap';
import AboutPage from './AboutPage/AboutPage';

const RightSide = () => (
  <Col md={12} lg={8}>
    <div className="rightSide">
      <div className="secWrapper">
        <div className="allPages">
          <AboutPage />
        </div>
      </div>
    </div>
  </Col>
)

export default RightSide;