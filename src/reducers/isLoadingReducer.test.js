import { isLoadingReducer } from './isLoadingReducer';
import * as actions from '../actions';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = isLoadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state tree with updated state', () => {
    const expected = true;
    const action = actions.isLoading(true);
    const result = isLoadingReducer(true, action);

    expect(result).toEqual(expected)
  });

});