export const LASERS = 'LASERS';

export const allLasers = () => {
    return async (dispatch, getState) => {
        dispatch({ type: LASERS });
    }
}