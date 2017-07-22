import controls from './controls';
import * as actions from '../actions/controls';

describe('Reducers', () => {
  describe('Controls', () => {
    describe('adjusting state based on control actions', () => {
      test('will increase scale by 0.05 when zooming in', () => {
        expect(controls(
          { scale: 0.5 },
          { type: actions.ZOOM_IN }
        )).toEqual({ scale: 0.55 });
      });

      test('will decrease scale by 0.05 when zooming out', () => {
        expect(controls(
          { scale: 0.8 },
          { type: actions.ZOOM_OUT }
        )).toEqual({ scale: 0.75 });
      });

      test('will decrease scale to 0.§ when zooming out and the scale is less than 0.15', () => {
        expect(controls(
          { scale: 0.14 },
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
