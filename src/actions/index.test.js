import * as actions from '../actions';

describe('actions', () => {
  it('should return a type of setPresidents', () => {
    const presidents = [{
    number: 1,
    president: "George Washington",
    birth_year: 1732,
    death_year: 1799,
    took_office: "1789-04-30",
    left_office: "1797-03-04",
    party: "No Party"
  }]

    const expected = {
    type: 'SET_PRESIDENTS',
    presidents
    }

    const result = actions.setPresidents(presidents);

    expect(result).toEqual(expected);

  });

  it('should return a type of isLoading', () => {
    const bool = true;
    const expected = {
      type: 'IS_LOADING',
      isLoading: bool
    };

    const result = actions.isLoading(true);

    expect(result).toEqual(expected);

  });

  it('should return a type of setError with error message', () => {
    const error = 'Something went wrong';
    const expected = {
      type: 'SET_ERROR',
      error
    };

    const result = actions.setError(error);

    expect(result).toEqual(expected);
  });
});