import { Actions } from '../actions';
import { ActionType } from '../action-types';

interface StateInterface {
  isLoading: boolean;
  data: string[];
  error: string;
}

const reducer = (state: StateInterface, action: Actions) => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { isLoading: true, data: [], error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { isLoading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
