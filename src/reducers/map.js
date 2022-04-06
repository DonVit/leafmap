import {split} from 'ramda'
const defaultState={
  center:[47.0219, 28.8617],
  zoom:4,
  position:[47.0219, 28.8617]
}
const splitByComma = split(',')
const updateMap = (state, {center, zoom, position}) => ({
  center: splitByComma(center),
  zoom,
  position: splitByComma(position)
}) 

export default function(state = defaultState, action){
  switch (action.type) {
    case 'MAP':
      return updateMap(state, action.payload)

    default:
      return state
  }
}
  