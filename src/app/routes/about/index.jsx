import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/button.jsx';

import style from './styles.scss';

export default class About extends React.PureComponent {

  render() {
    return (
      <div className="about-content">
        <div className="slider-wrapper">
          <div className="slider">
            <h1>About Us</h1>
            <h2>The clever thing for your everything</h2>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h2>Eleme Smart Home</h2>
          <p>Sengled GmbH is an international manufacturer of innovative and smart lighting products. We have more than 20 years’ experience in the lighting industry. With developers and designers in Germany, the USA and China and over 200 patents, we are different to other traditional lighting product manufacturers. We aim to impress and inspire people with our products. You’ll notice the Wow! effect as soon as you try a Sengled product. Our products are always a little different, a little more modern and, above all, simple to operate and useful.</p>
          <p>Sengled GmbH is an international manufacturer of innovative and smart lighting products. We have more than 20 years’ experience in the lighting industry. With developers and designers in Germany, the USA and China and over 200 patents.</p>
        </div>
      </div>
    );
  }
};
