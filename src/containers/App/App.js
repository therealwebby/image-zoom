import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Image from '../../components/Image/Image';
import ZoomControls from '../../components/ZoomControls/ZoomControls';

import * as controlActions from '../../actions/controls';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.updateZoomPosition(1);
  }

  render() {
    return (
      <div id="app">
        <ZoomControls
          zoomIn={this.props.zoomIn}
          zoomOut={this.props.zoomOut}
          updateZoomPosition={this.props.updateZoomPosition}
          scale={this.props.controls.scale}
        />
        <Image
          scale={this.props.controls.scale}
          updateZoomPosition={this.props.updateZoomPosition}
        />
      </div>
    );
  }
}

App.propTypes = {
  controls: PropTypes.shape({
    scale: PropTypes.number.isRequried
  }),
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  updateZoomPosition: PropTypes.func.isRequired
};

App.defaultProps = {
  controls: {
    scale: 1
  }
};

/**
 * Add each state to props
 * @param {Object} state
 * @returns {{controls: Object}}
 */
function mapStateToProps(state) {
  const {
    controls
  } = state;

  return {
    controls
  };
}

/**
 * Add dispatches to the props
 * @param  {function} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(
    {},
    controlActions
  ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
