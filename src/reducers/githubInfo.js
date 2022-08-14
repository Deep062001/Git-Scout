// eslint-disable-next-line import/no-anonymous-default-export
export default (githubInfo = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        case 'NOT_FOUND':
            return action.payload;
        default:
            return githubInfo;
    }
};