import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as controlActions from '../../actions/controls';

const App = () => (<h1>Hello World</h1>);

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
