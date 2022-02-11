import { Link } from 'gatsby';
import React from 'react';
import { Headphones, Info, List, UserCheck } from 'react-feather';

const FooterSideBar = () => (
  <div className="footerSideBar">
    <div className="sideBarLinks">
      <ul className="mainLinks listUnstyled">
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><Info size={24} /></span><span className="toolTipContent">About Me</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><Image size={24} /></span><span className="toolTipContent">My Portfolio</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><UserCheck size={24} /></span><span className="toolTipContent">Hire Me</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><List size={24} /></span><span className="toolTipContent">My Resume</span></Link></li>
        <li><Link to="" className="toolTipCust"><span className="toolTipItem"><Headphones size={24} /></span><span className="toolTipContent">Contact Me</span></Link></li>
      </ul>
    </div>
  </div>
)

export default FooterSideBar;