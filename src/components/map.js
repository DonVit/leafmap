import React, {useState} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector, useDispatch } from 'react-redux'
import { join } from 'ramda'
import { setMap } from '../actions'

const mapStyle = {
  height: '400px'
};

const joinByComma = join(',')

export function CustomMap() {
  const {center, zoom, position} = useSelector(state=>state.map)
  const [currentPosition, setPosition] = useState(joinByComma(position))
  const [currentCenter, setCenter] = useState(joinByComma(center))
  const [currentZoom, setZoom] = useState(zoom)

  const dispatch = useDispatch()
  const updatePosition = ()=>dispatch(setMap({
    center: currentCenter, 
    zoom: parseInt(currentZoom), 
    position: currentPosition
  }))
  return (
    <div>
      <Map center={center} zoom={zoom} style={mapStyle}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      <div>
        <label for="center">Center:</label>
        <input name="center" value={currentCenter} onChange={event => setCenter(event.target.value)} />
        </div>
        <div>
        <label for="zoom">Zoom:</label>
        <input name="zoom" value={currentZoom} onChange={event => setZoom(event.target.value)} />
        </div>
        <div>
        <label for="position">Position:</label>
        <input name="position" value={currentPosition} onChange={event => setPosition(event.target.value)} />
      </div>
      <div>
        <button onClick={updatePosition}>
        Update Position
        </button>
      </div>
    </div>
  )
}
