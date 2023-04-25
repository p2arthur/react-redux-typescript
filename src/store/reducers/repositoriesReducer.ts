enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

interface StateInterface {
  isLoading: boolean;
  data: string[];
  error: string;
}

interface ActionsInterface {
  SearchRepositoriesAction: { type: ActionType.SEARCH_REPOSITORIES };
  SearchRepositoriesSuccesAction: {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
  };
  SearchRepositoriesErrorAction: {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
  };
}

type Actions =
  | ActionsInterface['SearchRepositoriesAction']
  | ActionsInterface['SearchRepositoriesSuccesAction']
  | ActionsInterface['SearchRepositoriesErrorAction'];

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
