import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as vaccinationCenters from "./vaccinationCenters.json";
import "./Character.css";

export default function App() {
  const [activeCenter, setActiveCenter] = React.useState(null);

  return (
    <MapContainer center={[38.722252, -9.139337]} zoom={12}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {vaccinationCenters.vaccinationCenters.map((center) => (
        <Marker
          key={center.id}
          position={[center.latitude, center.longitude]}
          eventHandlers={{
            click: () => {
              setActiveCenter(center);
            },
          }}
        />
      ))}

      {activeCenter && (
        <Popup position={[activeCenter.latitude, activeCenter.longitude]}>
          <div>
            <h2>{activeCenter.center}</h2>
            <p>
              <strong>Address:</strong> {activeCenter.address}
            </p>
            <p>
              <strong>Phone:</strong> {activeCenter.phone}
            </p>
            <img className='images' src={activeCenter.img} alt='aaa' />
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}
