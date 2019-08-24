import { node } from 'prop-types';
import React from 'react';

const Content = ({ children }) => (
  <div className="Content">
    {children}
  </div>
)

Content.propTypes = {
  children: node.isRequired
};

export default Content;