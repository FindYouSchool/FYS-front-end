import React from "react";
import { useOutletContext } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./schoolOverview.css";

const SchoolOverview = () => {
  const school = useOutletContext();
  return (
    <div className="container my-5">
      <h2>Qui somme-nous ?</h2>
      <p>{school?.description}</p>
      <h2 className="mt-5 mb-3">Plan d'acces au campus</h2>
      <MapContainer
        style={{ width: "100%", height: "400px", borderRadius: "10px" }}
        center={[48.78, 2.36]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.78, 2.36]}>
          <Popup>{school.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SchoolOverview;
