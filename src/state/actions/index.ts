import { ActionType } from '../action-types';

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

export type Actions =
  | ActionsInterface['SearchRepositoriesAction']
  | ActionsInterface['SearchRepositoriesSuccesAction']
  | ActionsInterface['SearchRepositoriesErrorAction'];
