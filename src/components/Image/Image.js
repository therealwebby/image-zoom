import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Image.css';
import image from '../../assets/images/flower.jpg';

export default class Image extends Component {
  render() {
    this.styles = {
      transform: `scale(${this.props.scale}, ${this.props.scale})`
    };

    return (
      <div className="image-container">
        <img
          src={image}
          className="image"
          alt="sunset"
          style={this.styles}
        />
      </div>
    );
  }
}

Image.propTypes = {
  scale: PropTypes.number.isRequired
};
