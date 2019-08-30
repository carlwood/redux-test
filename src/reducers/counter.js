const counterReducer = (state = 0, action) => {
  switch (action.type) {
    
    case 'INCREMENT_COUNTER':
      console.log(action);
      return state + 1
    case 'DECREMENT_COUNTER':
      console.log(action);
      return state - 1
    default:
      return state
  }
}

export default counterReducer
