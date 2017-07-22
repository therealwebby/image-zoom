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
  }

  render() {
    return (
      <h1>selector {this.props.activeImageUrl}</h1>
    );
  }
}

ImageSelector.propTypes = {
  activeImageUrl: PropTypes.string.isRequired,
  setActiveImage: PropTypes.func.isRequired
};
