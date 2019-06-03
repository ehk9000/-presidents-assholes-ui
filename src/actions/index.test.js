
import * as actions from '../actions';

describe('actions', () => {
  it('should return a type of setPresidents', () => {
    const presidents = {
    number: 1,
    president: "George Washington",
    birth_year: 1732,
    death_year: 1799,
    took_office: "1789-04-30",
    left_office: "1797-03-04",
    party: "No Party"
  }

    const expected = {
    type: 'SET_PRESIDENTS',
    presidents
    }

    const result = actions.setPresidents(presidents);

    expect(result).toEqual(expected);

  });
})