import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/button.jsx';

import style from './styles.scss';

export default class Home extends React.PureComponent {

  scrollOn() {
    document.getElementById('iframe').style.pointerEvents = "auto";
  }

  scrollOff() {
    document.getElementById('iframe').style.pointerEvents = "none";
  }

  render() {
    return (
      <div className="main-content">
        <div className="slider-wrapper">
          <div className="slider">
            <h1>Beautiful smart home for you</h1>
            <h2>The clever thing for your everything</h2>
            <Button
              to={"/products"}
              text={"Learn more"}
            />
          </div>
          <ul className="slider-buttons">
            <li><Link to='/specific-product'>Energy</Link></li>
            <li><Link to='/specific-product'>Safety</Link></li>
            <li><Link to='/specific-product'>Comfort</Link></li>
          </ul>
        </div>
        <div className="main-text-block">
          <h2>Eleme Smart Home</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <Button
            inverse
            to={"/products"}
            text={"Explore more"}
          />
        </div>
        <div className="elemets-block">
          <ul>
            <li>
              <img src="../img/energy-photo.jpg" alt="Energy photo" />
              <div>
                <h2>Energy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur doloribus, odit minus? Cupiditate temporibus, libero animi, voluptate laboriosam ipsum, voluptatum sit rerum quaerat sint aperiam harum cumque asperiores voluptatibus voluptatem!</p>
                <Button
                  to={"/products"}
                  text={"Learn more"}
                />
              </div>
            </li>
            <li>
              <div>
                <h2>Energy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur doloribus, odit minus? Cupiditate temporibus, libero animi, voluptate laboriosam ipsum, voluptatum sit rerum quaerat sint aperiam harum cumque asperiores voluptatibus voluptatem!</p>
                <Button
                  to={"/products"}
                  text={"Learn more"}
                />
              </div>
              <img src="../img/safety-photo.jpg" alt="Safety photo" />
            </li>
            <li>
              <img src="../img/comfort-photo.jpg" alt="Comfort photo" />
              <div>
                <h2>Energy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur doloribus, odit minus? Cupiditate temporibus, libero animi, voluptate laboriosam ipsum, voluptatum sit rerum quaerat sint aperiam harum cumque asperiores voluptatibus voluptatem!</p>
                <Button
                  to={"/products"}
                  text={"Learn more"}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="map-block">
          <h2>How to find us?</h2>
          <p>Domina shopping mall Ieriķu street 3, Vidzemes priekšpilsēta, Riga, LV-1084</p>
          <div onClick={this.scrollOn} onMouseLeave={this.scrollOff}>
            <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.977728676661!2d24.15891831661045!3d56.966313980895265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece4f87a96f9f%3A0xd4b908bee3cb6b97!2sDomina+Shopping!5e0!3m2!1sen!2slv!4v1501952841161" width="100%" height="500" scrolling="no" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="partners">
          <h2>Our partners</h2>
          <ul>
            <li><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></li>
            <li><a href="#"><img src="../img/logos/senged-logo.png" alt="senged logo" /></a></li>
            <li><a href="#"><img src="../img/logos/netatmo-logo.png" alt="netatmo logo" /></a></li>
            <li><a href="#"><img src="../img/logos/senged-logo.png" alt="senged logo" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
};
