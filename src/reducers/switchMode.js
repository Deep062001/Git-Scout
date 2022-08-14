// eslint-disable-next-line import/no-anonymous-default-export
export default (mode = [], action) => {
    switch (action.type) {
        case 'SWITCH':
            return !action.payload;
        // case 'FETCH_REPOS':
        //     return action.payload;
        default:
            return mode;
    }
};