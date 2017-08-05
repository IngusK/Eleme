import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class Button extends React.PureComponent {

  render() {
    return (
    <div>
      <Link className="button-primary inverse" to="/products">Explore more</Link>
    </div>
    );
  }
};
