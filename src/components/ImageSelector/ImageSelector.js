import React, { Component } from 'react';
import PropTypes from 'prop-types';

import mainPageImage from '../../assets/images/main-page.png';
import onboardingInvite from '../../assets/images/onboarding-invite.png';
import onboardingLocation from '../../assets/images/onboarding-location.png';

import './ImageSelector.css';

export default class ImageSelector extends Component {
  constructor(props) {
    super(props);

    this.availableImages = [mainPageImage, onboardingInvite, onboardingLocation];
    this.props.setActiveImage(this.availableImages[0]);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.setActiveImage(event.target.value);
  }

  render() {
    return (
      <select
        defaultValue={this.props.activeImageUrl}
        onChange={this.handleOnChange}
      >
        {this.availableImages.map((image, index) =>
          (<option
            value={image}
            key={image}
          >
            Image {index}
          </option>)
        )};
      </select>
    );
  }
}

ImageSelector.propTypes = {
  activeImageUrl: PropTypes.string.isRequired,
  setActiveImage: PropTypes.func.isRequired
};
