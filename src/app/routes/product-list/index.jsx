import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class ProductsList extends React.PureComponent {

  render() {
    return (
      <div className="products-list">
        <h2>Mobile devices</h2>
        <div className="table">
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
          <Link to='/product-info' className="logo"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></Link>
          <Link to='/product-info'><img src="../img/energy-photo.jpg" alt="Brand logo" /></Link>
          <div>
            <h3>Device name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
          </div>
          <h4>99.99 Eur</h4>
        </div>
        {/* <table>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
          <tr>
            <td><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></td>
            <td><img src="../img/energy-photo.jpg" alt="Brand logo" /></td>
            <td>
              <h4>Device name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam, repudiandae atque, nesciunt quasi harum repellendus numquam tempore sequi qui eligendi, iusto dolores dolor quisquam asperiores optio beatae minus. Est?</p>
            </td>
            <td>99.99 Eur</td>
          </tr>
        </table> */}
      </div>
    );
  }
};
