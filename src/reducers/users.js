const defaultState={
  1:{user:'user1'}
}

export default function(state = defaultState, action){
  return {
    ...state, 
    ...action.payload
  }
}
