import * as actions from './controls';

describe('Actions', () => {
  describe('Controls', () => {
    describe('zooming in using controls', () => {
      test('can create an action to zoom in', () => {
        expect(actions.zoomIn()).toEqual({
          type: 'ZOOM_IN'
        });
      });

      test('can create an action to zoom out', () => {
        expect(actions.zoomOut()).toEqual({
          type: 'ZOOM_OUT'
        });
      });

      test('can create an action to update the zoom permission with the passed scale value', () => {
        expect(actions.updateZoomPosition(1.25)).toEqual({
          type: 'UPDATE_ZOOM_POSITION',
          scale: 1.25
        });
      });
    });
  });
});
