import { PresContainer, mapDispatchToProps, mapStateToProps} from './PresContainer';
import { setPresidents } from '../../actions';
import { fetchPresidents } from '../../thunks/fetchPresidents';

jest.mock("../../thunks/fetchPresidents");

describe('PresContainer', () => {
  let mockState;
  beforeEach(() => {
    mockState = {
      presidents: [{
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
      }],
      isLoading: false,
      error: ''
    };
  });
  describe('mapStateToProps', () => {
    it('should return an object with the presidents array', () => {
      const expected = {
        presidents: [{
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
        }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a setPresidents action when called', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const thunk = fetchPresidents()
      
      mappedProps.fetchPresidents()
      
      expect(mockDispatch).toHaveBeenCalledWith(thunk);
    });
  });
});