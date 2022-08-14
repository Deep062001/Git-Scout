// eslint-disable-next-line import/no-anonymous-default-export
export default (switchMode = [], action) => {
    switch (action.type) {
        case 'SWITCH':
            return !action.payload;
        // case 'FETCH_REPOS':
        //     return action.payload;
        default:
            return switchMode;
    }
};