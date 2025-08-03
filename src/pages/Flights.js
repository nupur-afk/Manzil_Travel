import "./Flights.css";
import React, { useState } from "react";

const Flights = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const mockResults = [
        { id: 1, airline: 'IndiGo', departure: 'Delhi (DEL)', arrival: 'Mumbai (BOM)', depTime: '10:00 AM', arrTime: '12:00 PM', price: '₹ 5,500' },
        { id: 2, airline: 'Vistara', departure: 'Delhi (DEL)', arrival: 'Mumbai (BOM)', depTime: '01:30 PM', arrTime: '03:45 PM', price: '₹ 6,200' },
        { id: 3, airline: 'Air India', departure: 'Delhi (DEL)', arrival: 'Mumbai (BOM)', depTime: '06:00 PM', arrTime: '08:15 PM', price: '₹ 5,800' },
        { id: 4, airline: 'SpiceJet', departure: 'Delhi (DEL)', arrival: 'Bengaluru (BLR)', depTime: '08:00 AM', arrTime: '10:30 AM', price: '₹ 4,900' },
        { id: 5, airline: 'GoAir', departure: 'Delhi (DEL)', arrival: 'Bengaluru (BLR)', depTime: '02:00 PM', arrTime: '04:45 PM', price: '₹ 5,300' },
      ];
      setSearchResults(mockResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="page-section">
      <video autoPlay loop muted className="video-background">
        <source
          src="https://media.istockphoto.com/id/1313942113/video/airplane-flying-over-tropical-trees.mp4?s=mp4-640x640-is&k=20&c=Iio8Y5yTY4CRz1JTrXsRzvKUel0ZopBvxrTd9n3HqIc="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay"></div>

      <div className="flight-card-glass">
        <h2 className="glass-heading">Find Your Perfect Flight</h2>
        <form onSubmit={handleSearch} className="glass-form-grid">
          <input
            type="text"
            placeholder="From (e.g. Delhi)"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="To (e.g. Mumbai)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            placeholder="Passengers"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search Flights'}
          </button>
        </form>
      </div>

      {loading && (
        <div className="loading-message">
          Searching for the best flights...
        </div>
      )}

      {searchResults.length > 0 && !loading && (
        <div className="results-container">
          <h3 className="results-title">Available Flights</h3>
          <div className="flight-results-list">
            {searchResults.map((flight) => (
              <div key={flight.id} className="flight-card">
                <div className="flight-details">
                  <p className="flight-airline">{flight.airline}</p>
                  <p className="flight-route">
                    {flight.departure} to {flight.arrival}
                  </p>
                  <p className="flight-time">
                    {flight.depTime} - {flight.arrTime}
                  </p>
                </div>
                <div className="flight-price-section">
                  <p className="flight-price">{flight.price}</p>
                  <button className="flight-book-button">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchResults.length === 0 && !loading && origin && destination && (
        <div className="no-results-message">
          No flights found for your search criteria. Try different dates or destinations.
        </div>
      )}
    </section>
  );
};

export default Flights;
