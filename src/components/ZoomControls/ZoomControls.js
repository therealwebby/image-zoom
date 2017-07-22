import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ZoomControls.css';

export default class ZoomControls extends Component {
  constructor(props) {
    super(props);

    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
  }

  onZoomIn() {
    this.props.zoomIn();
  }

  onZoomOut() {
    this.props.zoomOut();
  }

  render() {
    return (
      <div className="zoom-controls">
        <button
          className="zoom-controls__button zoom-controls__button--zoom-in"
          onClick={this.onZoomIn}
          disabled={this.props.scale === 1}
        >
          Zoom In
        </button>
        <button
          className="zoom-controls__button zoom-controls__button--zoom-out"
          onClick={this.onZoomOut}
          disabled={this.props.scale === 0.1}
        >
          Zoom Out
        </button>
        <span className="zoom-controls__percentage">
          {Math.floor(this.props.scale * 100)}%
        </span>
      </div>
    );
  }
}

ZoomControls.propTypes = {
  scale: PropTypes.number.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired
};
