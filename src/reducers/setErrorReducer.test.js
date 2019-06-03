import { setErrorReducer } from './setErrorReducer';
import * as actions from '../actions';

describe('setErrorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = setErrorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state tree with an error message', () => {
    const error = 'Something went wrong';
    const expected = 'Something went wrong'
    const action = actions.setError(error);
    const result = setErrorReducer('', action);

    expect(result).toEqual(expected);
  });
});