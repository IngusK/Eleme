import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class ProductsCategory extends React.PureComponent {

  render() {
    return (
      <div className="specific-products-content">
        <h2>Energy</h2>
        <div className="line energy"></div>
        <p>Sengled GmbH is an international manufacturer of innovative and smart lighting products. With developers and designers in Germany, the USA and China and over 200 patents, we are different to other traditional lighting product manufacturers.</p>
        <div className="brands">
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/main-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>
          <div className="brand-block">
            <div>
              <Link to='/product-list'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
              <h4>Mobile devices</h4>
            </div>
          </div>

        </div>
      </div>
    );
  }
};
