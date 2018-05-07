const initialState = {
    users : [],
    loading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return {
          ...state,
          loading:true,
          error: null
        }
        break;

      case 'GET_USERS_FULFILLED':
        return {
          ...state,
          users: action.payload.items,
          loading:false,
          error: null
        }
        break;

        case 'GET_USERS_REJECTED':
          return {
            ...state,
            users: [],
            loading:false,
            error: "Inernet Server Error"
          }
          break;

      default:
        return state
    }
}

export default usersReducer;