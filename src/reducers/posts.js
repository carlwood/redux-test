const postsReducer = (state = [], action) => {
    switch (action.type) {
      case 'INCREMENT_POST_LIKES':
        console.log(state, action);
        const i = action.index
        // return the updated statet
        console.log('increment post likes at ', action);
        return [
            ...state.slice(0,i), // before the one we're updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), // everything after the one we're updating
        ]
      default:
        return state
    }
  }
  
  export default postsReducer
  
  