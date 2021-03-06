import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Image.css';

function _hasVerticallyOverflowingImage(imageElement) {
  return imageElement.offsetHeight > imageElement.parentElement.offsetHeight;
}

function _hasHorizontallyOverflowingImage(imageElement) {
  return imageElement.offsetWidth > imageElement.parentElement.offsetWidth;
}

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.onImageLoad = this.onImageLoad.bind(this);
  }

  onImageLoad(event) {
    const imageElement = event.target;
    this.setupImageScale(imageElement);
  }

  setupImageScale(imageElement) {
    let horizontalScale = 1;
    let verticalScale = 1;
    this.imageHeight = 'auto';
    this.imageWidth = 'auto';

    this.imageHeight = imageElement.offsetHeight;
    this.imageWidth = imageElement.offsetWidth;

    if (_hasVerticallyOverflowingImage(imageElement)) {
      verticalScale = Math.floor(
        (imageElement.parentElement.offsetHeight / imageElement.offsetHeight) * 100) / 100;
    }

    if (_hasHorizontallyOverflowingImage(imageElement)) {
      horizontalScale = Math.floor(
        (imageElement.parentElement.offsetWidth / imageElement.offsetWidth) * 100) / 100;
    }

    const scale = horizontalScale < verticalScale ? horizontalScale : verticalScale;

    this.props.updateZoomPosition(scale);
  }

  render() {
    this.styles = {
      transform: `scale(${this.props.scale}, ${this.props.scale})`,
      height: this.imageHeight !== 'auto' ? 'auto' : this.imageHeight,
      width: this.imageWidth !== 'auto' ? 'auto' : this.imageWidth,
      marginTop: isNaN(-(this.imageHeight / 2)) ? 0 : -(this.imageHeight / 2),
      marginLeft: isNaN(-(this.imageWidth / 2)) ? 0 : -(this.imageWidth / 2)
    };

    return (
      <div className="image-container">
        <img
          src={this.props.activeImageUrl}
          className="image"
          alt="sunset"
          style={this.styles}
          onLoad={this.onImageLoad}
        />
      </div>
    );
  }
}

Image.propTypes = {
  scale: PropTypes.number.isRequired,
  updateZoomPosition: PropTypes.func.isRequired,
  activeImageUrl: PropTypes.string.isRequired
};
