import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import volcanoIcon from "@iconify/icons-mdi/volcano";
import icebergIcon from "@iconify/icons-mdi/mountain";
import stormIcon from "@iconify/icons-mdi/weather-lightning-rainy";
import LocationInfoBox from "./LocationInfoBox";

const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const categoryDetails = {
  8: { icon: fireIcon, className: "location-icon-fire" },
  12: { icon: volcanoIcon, className: "location-icon-volcano" },
  15: { icon: icebergIcon, className: "location-icon-snow" },
  10: { icon: stormIcon, className: "location-icon-storm" },
};

const MapComponent = ({ eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const [viewport, setViewport] = useState({
    longitude: -118.2426,
    latitude: 34.0549,
    zoom: 6,
  });

  const createMarker = (ev) => {
    const categoryId = ev.categories[0].id;
    const details = categoryDetails[categoryId];

    if (!details) return null;

    return (
      <Marker
        key={ev.id}
        latitude={ev.geometries[0].coordinates[1]}
        longitude={ev.geometries[0].coordinates[0]}
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
      >
        <Icon
          icon={details.icon}
          className={`location-icon ${details.className}`}
        />
      </Marker>
    );
  };

  const markers = eventData?.map(createMarker);

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
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default MapComponent;
