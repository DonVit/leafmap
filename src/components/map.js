import React, {useState} from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
import { Spin } from 'antd'

const { BaseLayer, Overlay } = LayersControl
import { useSelector, useDispatch } from 'react-redux'
import { join, values } from 'ramda'
import { setMap, getPositions } from '../actions'

const mapStyle = {
  height: '400px'
};

const spinnerStyle = {
  position: 'fixed',
  zIndex: '999',
  height: '2em',
  width: '2em',
  overflow: 'visible',
  margin: 'auto',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
}

const center = [51.505, -0.09]
const center1 = [47, 28]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const joinByComma = join(',')

const CustomMarker = position => 
<Marker position={position}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>

export function CustomMap() {
  const {center, zoom, position} = useSelector(state=>state.map)
  const markers = useSelector(state=>state.marker)
  const isSpinning = useSelector(state=>state.spin)
  const [currentPosition, setPosition] = useState(joinByComma(position))
  const [currentCenter, setCenter] = useState(joinByComma(center))
  const [currentZoom, setZoom] = useState(zoom)

  const dispatch = useDispatch()
  const updatePosition = ()=>dispatch(setMap({
    center: currentCenter, 
    zoom: parseInt(currentZoom), 
    position: currentPosition
  }))

  const getAllPositions = ()=>dispatch(getPositions())

  const spinner = isSpinning ? <div style={spinnerStyle}>
  <Spin size="large" />
</div> : null

  return (
    <div>
      {spinner}
      <Map center={center} zoom={zoom} style={mapStyle}>
        <LayersControl position="topright">
          <BaseLayer checked name="Harta">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Harta AlbNegru">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay checked name="Pozitia curenta">
            {CustomMarker(position)}
          </Overlay>
          <Overlay name="Foto in jur">
          <Spin size="small" />
           <LayerGroup>
             {values(markers).map(CustomMarker)}
           </LayerGroup>
          </Overlay>
        </LayersControl>
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
      <div>
        <button onClick={getAllPositions}>
        Get Positions
        </button>
      </div>

    </div>
  )
}
