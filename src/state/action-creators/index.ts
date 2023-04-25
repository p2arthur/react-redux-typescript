import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Actions } from '../actions';
import axios from 'axios';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        { params: { text: term } }
      );

      const repositoryNames = data.objects.map(
        (repo: any) => repo.package.name
      );

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositoryNames,
      });
    } catch (error: any) {
      dispatch({ type: ActionType.SEARCH_REPOSITORIES_ERROR, payload: error });
    }
  };
};
