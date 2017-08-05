import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles/styles-header.scss';

export default class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to='/'><img src="../img/logos/eleme-logo.png" alt="Eleme logo" /></Link>
        </div>
        <nav>
          <ul>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};
