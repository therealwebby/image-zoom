import * as controlActions from '../actions/controls';

export default function controls(state = {}, action) {
  switch (action.type) {
    case controlActions.ZOOM_IN:
      return Object.assign({}, state, {
        scale: state.scale <= 0.95 ? state.scale + 0.05 : 1
      });
    case controlActions.ZOOM_OUT:
      return Object.assign({}, state, {
        scale: state.scale >= 0.15 ? state.scale - 0.05 : 0.1
      });
    case controlActions.UPDATE_ZOOM_POSITION:
      return Object.assign({}, state, {
        scale: action.scale
      });
    case controlActions.SET_ACTIVE_IMAGE:
      return Object.assign({}, state, {
        activeImageUrl: action.activeImageUrl
      });
    default: return state;
  }
}
