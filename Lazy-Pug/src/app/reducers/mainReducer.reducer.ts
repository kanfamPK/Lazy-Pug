const initState = {
  isLogin: false,
  userRole: null,
  isLoading: false,
  count: 0
}

export function mainReducer(state = initState, action) {
  switch(action.type) {
    case "Toggle loading": {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    }
    case "Increase count": {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case "Decrease count": {
      return {
        ...state,
        count: state.count - 1
      }
    }
    case "Update user role": {
      return {
        ...state,
        useRole: action.payload.useRole ? action.payload.useRole : state.userRole
      }
    }
    default:
      return state
  }
}
