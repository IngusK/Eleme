import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles/styles-footer.scss';

export default class Footer extends React.PureComponent {

  render() {
    return (
      <footer>
        <Link to='/'><img src="../img/logos/eleme-logo.png" alt="Eleme logo" /></Link>
        <p>Created by <a href="https://ingus.info" target="_blank">www.ingus.info</a> © All rights reserved.</p>
      </footer>
    );
  }
};
