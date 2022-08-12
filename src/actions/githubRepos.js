import * as api from '../api/index';

export const getPublicRepos = (userName) => async (dispatch) => {
    try {
        const { data } = await api.fetchPublicRepos(userName);
        dispatch({ type: 'FETCH_REPOS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}