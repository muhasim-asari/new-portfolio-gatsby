import { Link } from 'gatsby';
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'react-feather';

import "./socialNner.module.scss";

const SocialNner = () => (
  <div className="socialInner">
    <ul className="listUnstyled">
      <li><Link to="" target="_blank" className="fbIcon"><Facebook size={24} /></Link></li>
      <li><Link to="" target="_blank" className="instaIcon"><Instagram size={24} /></Link></li>
      <li><Link to="" target="_blank" className="linkedinIcon"><Linkedin size={24} /></Link></li>
    </ul>
  </div>
)

export default SocialNner;