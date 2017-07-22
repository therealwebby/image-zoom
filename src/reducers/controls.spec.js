import controls from './controls';
import * as actions from '../actions/controls';

describe('Reducers', () => {
  describe('Controls', () => {
    describe('adjusting state based on control actions', () => {
      test('will increase scale by 0.1 when zooming in', () => {
        expect(controls(
          { scale: 1 },
          { type: actions.ZOOM_IN }
        )).toEqual({ scale: 1.1 });
      });

      test('will decrease scale by 0.1 when zooming out', () => {
        expect(controls(
          { scale: 1.5 },
          { type: actions.ZOOM_OUT }
        )).toEqual({ scale: 1.4 });
      });

      test('will decrease scale to when zooming out and the scale is less than 1.1', () => {
        expect(controls(
          { scale: 1.05 },
          { type: actions.ZOOM_OUT }
        )).toEqual({ scale: 1 });
      });

      test('will set scale to a value passed to it', () => {
        expect(controls(
          { scale: 1.9 },
          {
            type: actions.UPDATE_ZOOM_POSITION,
            scale: 1.25
          }
        )).toEqual({ scale: 1.25 });
      });
    });
  });
});
