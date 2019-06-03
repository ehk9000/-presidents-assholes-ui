import { presidentsReducer } from './presidentsReducer';
import * as actions from '../actions';

describe('presidentsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = presidentsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state tree with the presidents array', () => {
    const presidents = [{
      number: 1,
      president: "George Washington",
      birth_year: 1732,
      death_year: 1799,
      took_office: "1789-04-30",
      left_office: "1797-03-04",
      party: "No Party"
    }, {
        number: 44,
        president: "Obama",
        birth_year: 1966,
        death_year: 1,
        took_office: "1789-04-30",
        left_office: "1797-03-04",
        party: "Democratic"
    }
  ];
    const action = actions.setPresidents(presidents);
    const result = presidentsReducer([], action);

    expect(result).toEqual(presidents);
  });
});