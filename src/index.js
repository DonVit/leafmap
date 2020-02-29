import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css'

const mapStyle = {
  height: '400px'
};

const mapCenter = [47.0219, 28.8617];
const zoomLevel = 4;

function CustomMap() {
  const [position, setPosition] = useState(mapCenter)
  const [center, setCenter] = useState(mapCenter)
  const [zoom, setZoom] = useState(zoomLevel)
  return (
        <div><Map center={center} zoom={zoom} style={mapStyle}>
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
        <button onClick={()=>setCenter([52,13])}>
            Change Map Center
        </button>
        <button onClick={()=>setPosition([52,13])}>
            Change Marker Position
        </button>
        <button onClick={()=>setZoom(10)}>
            Change Zoom
        </button>
        </div>
    )
  }
  
ReactDOM.render(
    <CustomMap />,
    document.getElementById('mapid')
);