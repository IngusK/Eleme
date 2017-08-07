import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import styles from './styles/styles-header.scss';

@withRouter
export default class Header extends React.PureComponent {
  render() {
    const activePath = this.props.location.pathname;
    return (
      <header>
        <div className="logo">
          <Link to='/'><img src="../img/logos/eleme-logo.png" alt="Eleme logo" /></Link>
        </div>
        <nav>
          <ul>
            <li className={activePath === "/products" ? 'active' : ''}><Link to='/products'>Products</Link></li>
            <li className={activePath === "/about" ? 'active' : ''}><Link to='/about'>About</Link></li>
            <li className={activePath === "/contacts" ? 'active' : ''}><Link to='/contacts'>Contacts</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};
