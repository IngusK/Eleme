import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class ProductInfo extends React.PureComponent {

  render() {
    return (
      <div className="product-info">
        <ul className="breadcrumbs">
          <li>
            <Link to='/products'>Products</Link>
          </li>
          /
          <li>
            <Link to='/specific-product'>Comfort</Link>
          </li>
          /
          <li>
            <Link to='/product-list'>Lamps</Link>
          </li>
        </ul>
        <div className="product-descr">
          <img src="../img/energy-photo.jpg" alt="Brand logo" />
          <div className="descr">
            <h2>SYLVANIA Smart Connected A19 RGBW LED</h2>
            <h2 className="price">$39.99</h2>
            <p>Add a little smartness to your home’s lighting. This ZigBee bulb lets you customize and automate the lights in your home to mimic any color in the rainbow. You can also tune the bulb to various shades of white, from a warm 1900 Kelvin to a vibrant 6500 Kelvin. Control lights from your smartphone, or trigger the lights and color based on an action.</p>
            <h3>You can</h3>
            <ul>
              <li>Turn the light on or off from your smartphone; or change its color</li>
              <li>Trigger lights to turn on or off when certain events take place, such as a door opening or closing, or someone entering or leaving a room</li>
            </ul>
          </div>
        </div>
        <div className="interested">
          <h3>You might also be interested in:</h3>
          <div className="elements">
            <div className="elem-block">
              <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <Link to='/product-info'><h4>SYLVANIA Smart Connected A19 RGBW LED</h4></Link>
              <h5>$39.99</h5>
            </div>
            <div className="elem-block">
              <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <Link to='/product-info'><h4>SYLVANIA Smart Connected A19 RGBW LED</h4></Link>
              <h5>$39.99</h5>
            </div>
            <div className="elem-block">
              <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <Link to='/product-info'><h4>SYLVANIA Smart Connected A19 RGBW LED</h4></Link>
              <h5>$39.99</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
