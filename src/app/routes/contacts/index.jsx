import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default class Contacts extends React.PureComponent {

  scrollOn() {
    document.getElementById('iframe').style.pointerEvents = "auto";
  }

  scrollOff() {
    document.getElementById('iframe').style.pointerEvents = "none";
  }

  render() {
    return (
      <div className="contacts-content">
        <div className="contacts-grid">
          <h1>Contact Us</h1>
          <h3>Domina shopping mall Ieriķu street 3, Vidzemes priekšpilsēta, Riga, LV-1084</h3>
          <h3>Our phone number: +371 2 678 5698, +371 6 236 2554</h3>
          <div className="map-block" onClick={this.scrollOn} onMouseLeave={this.scrollOff}>
            <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.977728676661!2d24.15891831661045!3d56.966313980895265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece4f87a96f9f%3A0xd4b908bee3cb6b97!2sDomina+Shopping!5e0!3m2!1sen!2slv!4v1501952841161" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <h2>Eleme Smart Home</h2>
          <p>Sengled GmbH is an international manufacturer of innovative and smart lighting products. We have more than 20 years’ experience in the lighting industry. With developers and designers in Germany, the USA and China and over 200 patents, we are different to other traditional lighting product manufacturers. We aim to impress and inspire people with our products. You’ll notice the Wow! effect as soon as you try a Sengled product. Our products are always a little different, a little more modern and, above all, simple to operate and useful.</p>
          <p>Sengled GmbH is an international manufacturer of innovative and smart lighting products. We have more than 20 years’ experience in the lighting industry. With developers and designers in Germany, the USA and China and over 200 patents.</p>
        </div>
      </div>
    );
  }
};
