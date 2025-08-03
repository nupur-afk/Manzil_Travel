// HotelsPage.js
import React, { useState } from "react";
import "./HotelsPage.css";

const HotelsPage = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API call for hotel search
    setTimeout(() => {
      const mockResults = [
        {
          id: 101,
          name: "The Grand Palace Hotel",
          location: "Mumbai",
          price: "₹8,000/night",
          rating: 4.5,
          image: "https://promos.makemytrip.com/Hotels_product/Luxe/themes.png",
        },
        {
          id: 102,
          name: "City View Suites",
          location: "Mumbai",
          price: "₹6,500/night",
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=crop&h=250&w=400",
        },
        {
          id: 103,
          name: "Coastal Retreat Resort",
          location: "Goa",
          price: "₹12,000/night",
          rating: 4.8,
          image: "https://i0.wp.com/hotelmagazine.co.nz/wp-content/uploads/2022/06/Vista-Exterior_Villa-Le-Blanc-e1655346748492.png?fit=1050%2C798&ssl=1",
        },
        {
          id: 104,
          name: "Himalayan Heights",
          location: "Manali",
          price: "₹7,500/night",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=crop&h=250&w=400",
        },
      ];
      setSearchResults(mockResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="page-section">
      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source
          src="https://media.istockphoto.com/id/1323921469/video/view-from-modern-living-room-with-curtains-blowing-in-the-wind-revealing-a-balcony-and-an.mp4?s=mp4-640x640-is&k=20&c=ULqNDiNRFsp13GnkTt1IioBpOcq6W3q8f71SxZdTbk8="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      <h2 className="page-title">Search & Book Hotels</h2>

      <div className="form-container">
        <form onSubmit={handleSearch} className="form-grid">
          <div className="form-group">
            <label htmlFor="hotelDestination">Destination?</label>
            <input
              type="text"
              id="hotelDestination"
              placeholder="e.g., Goa"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">Check-in Date</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Check-out Date</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="full-width form-center">
            <button
              type="submit"
              className="form-submit-button"
              disabled={loading}
            >
              {loading ? "Searching..." : "Find the Best Deals"}
            </button>
          </div>
        </form>

        {loading && (
          <div className="loading-message">
            Searching for the best hotels...
          </div>
        )}

        {searchResults.length > 0 && !loading && (
          <div className="results-container">
            <h3 className="results-title">Available Hotels</h3>
            <div className="hotel-results-grid">
              {searchResults.map((hotel) => (
                <div key={hotel.id} className="hotel-card">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="hotel-card-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/400x250/E0E7FF/4F46E5?text=Hotel+Image";
                    }}
                  />
                  <div className="hotel-card-content">
                    <h4 className="hotel-name">{hotel.name}</h4>
                    <p className="hotel-location">{hotel.location}</p>
                    <p className="hotel-rating">
                      {"⭐".repeat(Math.floor(hotel.rating))} ({hotel.rating})
                    </p>
                    <p className="hotel-price">{hotel.price}</p>
                    <button className="hotel-details-button">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchResults.length === 0 && !loading && destination && (
          <div className="no-results-message">
            No hotels found for your search criteria. Try different dates or destinations.
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelsPage;