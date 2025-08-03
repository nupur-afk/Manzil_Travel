import React, { useState } from 'react';
import './PackingListPage.css';

const PackingListPage = () => {
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [tripType, setTripType] = useState('');
  const [packingList, setPackingList] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGeneratePackingList = async () => {
    if (!destination.trim() || !travelDates.trim() || !tripType.trim()) {
      setError('Please fill in all fields (Destination, Travel Dates, Trip Type).');
      return;
    }

    setLoading(true);
    setPackingList('');
    setError('');

    try {
      const prompt = `Generate a comprehensive packing list for a trip to "${destination}" for "${travelDates}" for a "${tripType}" trip. Categorize items like Clothing, Toiletries, Documents, Electronics, and Miscellaneous.`;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyBn2iN3PL7LmCk2-JtuZZZd55dMfCmPf7M"; // replace if needed
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        setPackingList(text);
      } else {
        setError('Failed to generate packing list. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your network connection.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="packing-list-page">
      <video autoPlay loop muted className="video-background">
        <source src="https://media.istockphoto.com/id/808914462/video/multi-ethnic-family-pack-car-for-vacation-or-road-trip.mp4?s=mp4-640x640-is&k=20&c=qQtCEY1E47P0pUUC7WlORDfMf2xCEa8kA9dei_h0SgE=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      <div className="packing-content">
        <h1 className="packing-title">✈️ Smart Packing List Generator</h1>
        <p className="packing-subtitle">Let AI plan your luggage, so you travel stress-free!</p>

        <div className="form-grid">
          <input
            type="text"
            placeholder="Destination (e.g. Paris, Goa)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Travel Dates (e.g. 5 days in July)"
            value={travelDates}
            onChange={(e) => setTravelDates(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Trip Type (Adventure, Business, Relaxing)"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            required
          />
        </div>

        <button
          onClick={handleGeneratePackingList}
          className="generate-button"
          disabled={loading}
        >
          {loading ? 'Creating List...' : 'Generate Packing List'}
        </button>

        {loading && <div className="loading">⏳ Gathering items...</div>}
        {error && <div className="error">{error}</div>}

        {packingList && (
          <div className="packing-output">
            <h2>Your Personalized Packing List</h2>
            <pre>{packingList}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackingListPage;
