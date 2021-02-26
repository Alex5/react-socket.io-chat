export default (state, action) => {
    switch (action.type) {
        case 'IS_JOIN':
            return {
                ...state, isJoin: action.payload
            }
        default:
           return state;
    }
}