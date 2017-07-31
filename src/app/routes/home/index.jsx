import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";
import Arrow from '../../../../img/icons/arrow.svg';

import style from './styles.scss';

export default class Posts extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    posts: [],
  }

  componentDidMount() {
    var posts = database().ref('posts/');
    posts.on('value', (data) => {
      this.setState({ posts: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.posts[nr] && this.state.posts[nr][val];
  }

  // https://ingus-info.firebaseio.com/posts.json

  render() {
    return (
      <div className="main-content">
        <Arrow className="arrow"/>
        <h1><span>{this.getValue('Greeting', 1)}</span><br/>Welcome to my personal web page where I share my <b>travel</b>, <b>coding</b> and <b>photography</b> experience! <br/> <i>Why don't you start with my latest post?</i></h1>
        <div className="top-slider">
          <div className="slider-description">
            <h3>{this.getValue('TravelDate', 0)}</h3>
            <Link to=''><h2>India with<br/>Beautiful Destinations</h2></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="slider-photo">
            <Link to=''><img src="../img/sample.jpg" alt="Travel photo" /></Link>
          </div>
        </div>
        <h2>Some of my latest posts</h2>
        <div className="posts">
          <div className="post-1">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="post-2">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="post-3">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="post-4">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="post-5">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="post-6">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="post-7">
            <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
            <h3>January 21, 2017</h3>
            <Link to=''><h4>Dubai</h4></Link>
            <h5>Travel adventures</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
};
