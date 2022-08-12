// eslint-disable-next-line import/no-anonymous-default-export
export default (githubRepos = [], action) => {
    switch (action.type) {
        case 'FETCH_REPOS':
            return action.payload;
        // case 'FETCH_REPOS':
        //     return action.payload;
        default:
            return githubRepos;
    }
};