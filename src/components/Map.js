import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import the CSS
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -118.2426,
    latitude: 34.0549,
    zoom: 6,
  });

  return (
    <div className="map" style={{ height: "100vh", width: "100%" }}>
      <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxAccessToken}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
          <Icon icon={locationIcon} className="location-icon" />
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;
