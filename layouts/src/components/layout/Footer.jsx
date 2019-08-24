import { string } from 'prop-types';
import React from 'react';

const Footer = ({ copyright }) => (
  <div className="Footer">
    <p>&copy; {copyright}</p>
  </div>
);

Footer.propTypes = {
  copyright: string.isRequired
};

export default Footer;