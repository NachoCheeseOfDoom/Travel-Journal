import "./location.css";
export const LocationCard = (props) => {
  console.log(props.id);
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={`src/assets/images/${props.imageUrl}`}
        alt="location"
      />
      <div className="card-info">
        <div className="card-location">
          <p className="location">
            <i className="fa-solid fa-location-dot iconColor"></i>{" "}
            {props.location}
          </p>
          <a className="maps" href={props.googleMapsUrl} target="_blank">
            View on Google maps
          </a>
        </div>
        <h2 className="location-title">{props.title}</h2>
        <p className="visit-date">
          {props.startDate}-{props.endDate}
        </p>
        <p className="location-description"> {props.description}</p>
      </div>
    </div>
  );
};
