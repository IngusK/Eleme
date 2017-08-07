import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class Button extends React.PureComponent {

  static defaultProps = {
    inverse: false,
    to: '/',
    text: 'Learn more',
  }

  props: {
    inverse: boolean,
    to: string,
    text: string,
  }

  render() {
    const {
      inverse,
      to,
      text
    } = this.props
    return (
    <div>
      <Link className={`button-primary ${inverse ? 'inverse' : ''}`} to={to}>{text}</Link>
    </div>
    );
  }
};
