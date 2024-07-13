"use client";

import {MapContainer, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const position: [number, number] = [41.48036350282504, -71.31097911778397]
const icon = L.icon({ iconUrl: "/icon-location.svg" , iconSize: [66,88],
    iconAnchor: [33, 88]});

export default function Map(){
    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} zoomControl={false} className='h-[500px] sm:h-[600px] grayscale'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <ZoomControl position="bottomright" />
        </MapContainer>
    );
}