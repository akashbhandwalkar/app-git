const initialState = {
    users : [],
    loading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        console.log("acton.pp", action);
        return {
          ...state,
        }
      case 'GET_USERS_FULFILLED':
        console.log("pp", action.payload);
        return {
          ...state,
          users: action.payload.items
        }
      default:
        return state
    }
}

export default usersReducer;