const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h3>Event Location Info</h3>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
