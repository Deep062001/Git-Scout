export const switchMode = (mode) => (dispatch) => {
    try {
        dispatch({ type: 'SWITCH', payload: mode })
    } catch (error) {
        console.log(error.message);
    }
}