import { useState } from "react";
import PropTypes from "prop-types";
// import './PropertyDetails.css'; // Ensure you create this CSS file based on the provided styles

const PropertyDetails = ({ hotelData, property }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestCount, setGuestCount] = useState("1 guest");

  const subtitle = `${hotelData.guest_count} guests · ${
    hotelData.bedroom_count
  } bedroom${hotelData.bedroom_count > 1 ? "s" : ""} · ${
    hotelData.bathroom_count
  } bath${hotelData.bathroom_count > 1 ? "s" : ""}`;

  return (
    <div className="property-details-container">
      <div className="left-column">
        <div className="prop-info">
          <br />
          <h1 className="house-info">{hotelData.description}</h1>
          <p className="subtitle2">{subtitle}</p>
          <span className="rating">
            {property.rating} <b>{property.ratingLabel}</b>
          </span>
        </div>

        <br />
        <hr />

        <div className="host-first">
          <img src={property.host.image} alt="Host" />
          <div>
            <br />
            <p>Hosted by {hotelData.host_information.name}</p>
            <p>
              {property.host.status} · {property.host.years} years hosting
            </p>
            <br />
          </div>
        </div>

        <hr />
        <br />
        {property.features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <p>
              <b>{hotelData.host_information.name}</b>
            </p>
            <p>{feature.description}</p>
          </div>
        ))}
        <br />

        <hr />
        <br />
        <div className="translated-info">
          <p>
            Some info has been automatically translated.
            <a href="#" className="show-more">
              Show original
            </a>
          </p>
        </div>
        <div className="description">
          <p>{property.description}</p>
          <a href="#" className="show-more">
            Show more
          </a>
        </div>
        <br />
        <hr />
        <div className="bedroom">
          <h2>Where you&apos;ll sleep</h2>
          <br />
          <img src={property.bedroom.image} alt="Bedroom" />
          <p>{property.bedroom.type}</p>
          <p>{subtitle}</p>
        </div>
      </div>
      <aside className="booking-widget">
        <div className="right-column">
          <div className="date-picker">
            <h2>Add dates for prices</h2>
            <div className="date-inputs">
              <div className="date-input">
                <label htmlFor="check-in">CHECK-IN</label>
                <input
                  type="text"
                  id="check-in"
                  placeholder="Add date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div className="date-input">
                <label htmlFor="check-out">CHECKOUT</label>
                <input
                  type="text"
                  id="check-out"
                  placeholder="Add date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
            </div>
            <div className="guests">
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              >
                {property.guestsOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button className="check-availability">Check availability</button>
          </div>
          <div className="report-listing1">
            <span className="icon">⭐</span>
            <a href="#">Report this listing</a>
          </div>
        </div>
      </aside>
    </div>
  );
};

PropertyDetails.propTypes = {
  hotelData: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    guest_count: PropTypes.number.isRequired,
    bedroom_count: PropTypes.number.isRequired,
    bathroom_count: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
    host_information: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    address: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired, // Changed to string to match API response
    longitude: PropTypes.string.isRequired, // Changed to string to match API response
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        hotel_slug: PropTypes.string.isRequired,
        room_slug: PropTypes.string.isRequired,
        room_image: PropTypes.string.isRequired,
        room_title: PropTypes.string.isRequired,
        bedroom_count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,

  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingLabel: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      years: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    bedroom: PropTypes.shape({
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    }).isRequired,
    guestsOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PropertyDetails;
