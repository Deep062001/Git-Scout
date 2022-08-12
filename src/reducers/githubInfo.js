// eslint-disable-next-line import/no-anonymous-default-export
export default (githubInfo = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        case 'FETCH_REPOS':
            return action.payload;
        default:
            return githubInfo;
    }
};