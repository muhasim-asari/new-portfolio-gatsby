import React from 'react';
import { Col } from 'react-bootstrap';
import AboutPage from './AboutPage/AboutPage';
import Resume from './Resume/Resume';

import * as styles from './rightSide.module.scss'

const RightSide = () => (
  <Col md={12} lg={8}>
    <div className={styles.rightSide}>
      <div className={`${styles.secWrapper} secWrapper`}>
        <div className={`${styles.allPages} allPages`}>
          <AboutPage />
          <Resume />
        </div>
      </div>
    </div>
  </Col>
)

export default RightSide;