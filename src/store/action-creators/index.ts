import axios from 'axios';
import { ActionType } from '../action-types';
import { Actions } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: { text: term },
        }
      );

      const repositoriesNames = data.objects.map(
        (repository: any) => repository.package.name
      );

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositoriesNames,
      });
    } catch (error: any) {
      dispatch({ type: ActionType.SEARCH_REPOSITORIES_ERROR, payload: error });
    }
  };
};
