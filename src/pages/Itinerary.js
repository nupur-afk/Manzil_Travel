import React, { useState } from 'react';
import './ItineraryGeneratorPage.css';

const ItineraryGeneratorPage = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateItinerary = async () => {
    if (!destination.trim() || !startDate || !endDate) {
      setError('Please fill in all fields.');
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setError('End date cannot be before start date.');
      return;
    }

    setLoading(true);
    setItinerary('');
    setError('');

    try {
      const prompt = `Generate a concise travel itinerary for "${destination}" from ${startDate} to ${endDate}. Include 2-3 key activities or places per day.`;

      const payload = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      };
      const apiKey = "AIzaSyBn2iN3PL7LmCk2-JtuZZZd55dMfCmPf7M";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates[0]?.content?.parts?.[0]?.text
      ) {
        setItinerary(result.candidates[0].content.parts[0].text);
      } else {
        setError('Failed to generate itinerary. Please try again.');
        console.error('API response:', result);
      }
    } catch (err) {
      setError('An error occurred. Please check your network connection.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="itinerary-generator-page">
      <video autoPlay loop muted className="video-background">
        <source src="https://media.istockphoto.com/id/2178572575/video/a-highway-with-power-lines-stretching-across-a-mountain-landscape-with-snow-capped-peaks-in.mp4?s=mp4-640x640-is&k=20&c=4NAXlh7qTVfu2GB2xurJkC9uq_NNWv-AyEDe_kPdzWk=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      <h2 className="page-title">✨ AI Itinerary Generator</h2>

      <div className="form-container">
        <p className="intro-text">
          Let AI plan your trip effortlessly!
        </p>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              placeholder="e.g., Paris"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button
          className="generate-button"
          onClick={handleGenerateItinerary}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Itinerary'}
        </button>

        {loading && (
          <div className="loading-message">
            <div className="spinner"></div>
            Creating your perfect plan...
          </div>
        )}

        {error && (
          <div className="error-message">{error}</div>
        )}

        {itinerary && !loading && (
          <div className="result-container">
            <h3>Your Itinerary:</h3>
            <pre>{itinerary}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItineraryGeneratorPage;

