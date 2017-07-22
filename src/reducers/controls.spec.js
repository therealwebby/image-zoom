import controls from './controls';
import * as actions from '../actions/controls';

describe('Reducers', () => {
  describe('Controls', () => {
    describe('adjusting state based on control actions', () => {
      test('will increase scale by 0.1 when zooming in', () => {
        expect(controls(
          { scale: 0.5 },
          { type: actions.ZOOM_IN }
        )).toEqual({ scale: 0.6 });
      });

      test('will decrease scale by 0.1 when zooming out', () => {
        expect(controls(
          { scale: 0.5 },
          { type: actions.ZOOM_OUT }
        )).toEqual({ scale: 0.4 });
      });

      test('will decrease scale to 0.1 when zooming out and the scale is less than 0.2', () => {
        expect(controls(
          { scale: 0.15 },
          { type: actions.ZOOM_OUT }
        )).toEqual({ scale: 0.1 });
      });

      test('will set scale to a value passed to it', () => {
        expect(controls(
          { scale: 0.7 },
          {
            type: actions.UPDATE_ZOOM_POSITION,
            scale: 0.2
          }
        )).toEqual({ scale: 0.2 });
      });
    });
  });
});
