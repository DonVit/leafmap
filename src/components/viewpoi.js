import React from 'react'
import {
  LayersControl,
  Map,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet'

const { BaseLayer, Overlay } = LayersControl

const mapStyle = {
  height: '400px'
};

const CustomMarker = position => 
<Marker position={position}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>

export function ViewPoi(props) {
  const center=[props.lat,props.lng], position=[props.lat, props.lng]
  return (
    <div>
      <Map center={center} zoom={props.zoom} style={mapStyle}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        </Marker>
      </Map>
    </div>
  )
}
