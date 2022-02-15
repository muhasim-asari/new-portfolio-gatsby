import { Link } from 'gatsby';
import React from 'react';
import { Headphones, Info, List, UserCheck, Image } from 'react-feather';

import * as styles from './footerSideBar.module.scss'

const FooterSideBar = () => (
  <div className={styles.footerSideBar}>
    <div className={styles.sideBarLinks}>
      <ul className={`${styles.mainLinks} listUnstyled`}>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><Info size={24} /></span><span className={`${styles.toolTipContent} toolTipContent`}>About Me</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><Image size={24} /></span><span className={`${styles.toolTipContent} toolTipContent`}>My Portfolio</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><UserCheck size={24} /></span><span className={`${styles.toolTipContent} toolTipContent`} style={{ left: "-31px", bottom: "71px"}}>Hire Me</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><List size={24} /></span><span className={`${styles.toolTipContent} toolTipContent`}>My Resume</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><Headphones size={24} /></span><span className={`${styles.toolTipContent} toolTipContent`}>Contact Me</span></Link></li>
      </ul>
    </div>
  </div>
)

export default FooterSideBar;