import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Badge, Button, Col, Row, Space, Typography } from "antd";

// Fix default icon issue in Leaflet (important for markers to show)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Component to handle map clicks and add markers
const ClickMarker = ({ onAddMarker }) => {
  useMapEvents({
    click: (e) => {
      onAddMarker(e.latlng); // Add marker on map click
    },
  });
  return null;
};

const PerformanceMap = () => {
      const labels = [
        { color: "#D5F15B", text: "Чандагатай", percent: 50, lat: 47.05702528260841, lng: 101.34725532266879 },
        { color: "#3478F6", text: "Төвийн урд", percent: 50, lat: 45.754109791149894, lng: 99.37115079401494 },
        { color: "#203E7D", text: "Төвийн урд", percent: 50, lat: 44.42004966190147, lng: 103.76249419102346 },
      ];
  const [markers, setMarkers] = useState(labels); // State to store marker positions
//   const ulaanbaatarCoords = [47.918873, 106.917701]; // Default center coordinates
  const mongoliaCenter = [46.8625, 103.8467]; 
  // Function to handle adding a new marker
  const handleMapClick = (latlng) => {
    // setMarkers((prev) => [...prev, latlng]); // Add new marker to the state
    setMarkers((prev) => [...prev])
  };

  return (
    <Row gutter={[36, 16]} >
      <Col span={24} >
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" size="large" ghost style={{ border: 0, fontWeight:'bold' }}>
        Гүйцэтгэл талбайгаар
        </Button>
        <Space size="large">
      {labels.map((item, idx) => (
        <Badge
        size="large"
          key={idx}
          color={item.color}
          text={
            <Typography.Text style={{ color: "#555555" }}>
              {item.text} <strong>({item.percent}%)</strong>
            </Typography.Text>
          }
        />
      ))}
    </Space>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <MapContainer center={mongoliaCenter} zoom={5} style={{ height: "50vh", width: "100%" }}>
        {/* Tile layer for the map */}
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Component to handle map clicks */}
        <ClickMarker onAddMarker={handleMapClick} />
        {/* Render markers */}
        {markers.map((position, idx) => (
          <Marker key={idx} position={position}>
            <Popup>
              {position.text} <br /> Өргөрөг: {position.lat.toFixed(4)}, Уртраг: {position.lng.toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
   </Col>
   </Row>
  );
};

export default PerformanceMap;