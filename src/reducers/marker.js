const defaultState=[]

const updateMarkers = (state, payload) => ({
  ...state,
  ...payload,
}) 

export default function(state = defaultState, action){
  switch (action.type) {
    case 'MARKERS_FETCH_SUCCEEDED':
      return updateMarkers(state, action.payload)

    default:
      return state
  }
}
