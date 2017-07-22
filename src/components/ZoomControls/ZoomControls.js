import React, { Component } from 'react';

import './ZoomControls.css';

class Image extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="zoom-controls">
        <button className="zoom-controls__zoom-in">Zoom In</button>
        <button className="zoom-controls__zoom-out">Zoom Out</button>
      </div>
    );
  }
}

export default Image;
