import { string } from 'prop-types';
import React from 'react';

const Header = ({ title }) => (
  <header className='App-header'>
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;