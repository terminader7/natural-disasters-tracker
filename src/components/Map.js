import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import the CSS
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ eventData }) => {
  const [viewport, setViewport] = React.useState({
    longitude: -118.2426,
    latitude: 34.0549,
    zoom: 6,
  });

  const markers = eventData?.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <Marker
          key={ev.id}
          latitude={ev.geometries[0].coordinates[1]}
          longitude={ev.geometries[0].coordinates[0]}
        >
          <Icon icon={locationIcon} className="location-icon" />
        </Marker>
      );
    }
  });

  return (
    <div className="map">
      <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxAccessToken}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {markers}
      </Map>
    </div>
  );
};

export default MapComponent;
