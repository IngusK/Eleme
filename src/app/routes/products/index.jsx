import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class Products extends React.PureComponent {

  render() {
    return (
      <div className="products-content">
        <h2>Products</h2>
        <p>Sengled GmbH is an international manufacturer of innovative and smart lighting products. We have more than 20 years’ experience in the lighting industry. With developers and designers in Germany, the USA and China and over 200 patents, we are different to other traditional lighting product manufacturers. We aim to impress and inspire people with our products. You’ll notice the Wow! effect as soon as you try a Sengled product. Our products are always a little different, a little more.</p>
        <div className="slider-wrapper">
          <ul className="slider-buttons">
            <li>
              <img src="../img/energy-photo.jpg" alt="Energy photo" />
              <Link to='/specific-product'>Energy</Link>
            </li>
            <li>
              <img src="../img/safety-photo.jpg" alt="Safety photo" />
              <Link to='/specific-product'>Safety</Link></li>
            <li>
              <img src="../img/comfort-photo.jpg" alt="Comfort photo" />
              <Link to='/specific-product'>Comfort</Link>
            </li>
          </ul>
        </div>
        <h2>Choose by our brands</h2>
        <div className="brands">
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/senged-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/senged-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/senged-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>
          <div className="brand-block">
            <div>
              <a href="#"><img src="../img/logos/senged-logo.png" alt="netatmo logo" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Link className="view-button" to='/specific-product'>View</Link>
          </div>

        </div>
      </div>
    );
  }
};
