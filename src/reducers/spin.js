const defaultState=false


export default function(state = defaultState, action){
  switch (action.type) {
    case 'MARKERS_FETCH_SUCCEEDED':
      return false
    case 'MARKERS_FETCH_FAILED':
      return false
    case 'MARKERS_FETCH_REQUEST':
      return true
    default:
      return state
  }
}
