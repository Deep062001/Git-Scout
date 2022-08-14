import * as api from '../api/index';

export const getUserbyUserName = (userName) => async (dispatch) => {
    try {
        const { data } = await api.fetchUserbyUserName(userName);
        dispatch({ type: 'FETCH_USER', payload: data })
    } catch (error) {
        const data = {
            message: "Not Found"
        }
        console.log(error.message);
        dispatch({ type: 'NOT_FOUND', payload: data })
    }
}


export const getPublicRepos = (userName) => async (dispatch) => {
    try {
        const { data } = await api.fetchPublicRepos(userName);
        dispatch({ type: 'FETCH_REPOS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}