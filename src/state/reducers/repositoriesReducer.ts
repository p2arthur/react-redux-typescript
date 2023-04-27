import { Actions } from '../actions';
import { ActionType } from '../action-types';

export interface StateInterface {
  isLoading: boolean;
  data: string[];
  error: string | null;
}

const initialState: StateInterface = {
  isLoading: false,
  data: [],
  error: null,
};

export const repositoriesReducer = (
  state: StateInterface = initialState,
  action: Actions
) => {
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
