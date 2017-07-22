import * as controlActions from '../actions/controls';

export default function controls(state = {}, action) {
  switch (action.type) {
    case controlActions.ZOOM_IN:
      return Object.assign({}, state, {
        scale: state.scale + 0.1
      });
    case controlActions.ZOOM_OUT:
      return Object.assign({}, state, {
        scale: state.scale > 1.1 ? state.scale - 0.1 : 1
      });
    case controlActions.UPDATE_ZOOM_POSITION:
      return Object.assign({}, state, {
        scale: action.scale
      });
    default: return state;
  }
}
