export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
export const UPDATE_ZOOM_POSITION = 'UPDATE_ZOOM_POSITION';
export const SET_ACTIVE_IMAGE = 'SET_ACTIVE_IMAGE';

export function zoomIn() {
  return {
    type: ZOOM_IN
  };
}

export function zoomOut() {
  return {
    type: ZOOM_OUT
  };
}

export function updateZoomPosition(scale) {
  return {
    type: UPDATE_ZOOM_POSITION,
    scale
  };
}

export function setActiveImage(activeImageUrl) {
  return {
    type: SET_ACTIVE_IMAGE,
    activeImageUrl
  };
}
