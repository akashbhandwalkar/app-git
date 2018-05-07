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
      case 'GET_USERS_SUCCESS':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
}

export default usersReducer;