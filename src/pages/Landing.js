import React, { useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-hero">
        <video
          className="background-video"
         // src="https://media.istockphoto.com/id/1482328578/video/kathmandus-durbar-square-a-timeless-journey.mp4?s=mp4-640x640-is&k=20&c=lbWftR8KAYUgGdCOchixzH1zRs-L6PyyUTj_vIJrI3c="
          
        src="https://media.istockphoto.com/id/2087813515/video/walking-in-arashiyama-bamboo-forest-kyoto-osaka-japan.mp4?s=mp4-640x640-is&k=20&c=S3xGOL3HYTyLHWAPJZJYXeHwHXiSnmOSNRS5VQJ77KE="
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="overlay fade-in">
          <h1 className="title">Discover Your मनZil</h1>
          <p className="subtitle">Plan, Explore & Experience the perfect journey</p>
          <div className="cta-buttons">
            <Link to="/flights" className="btn explore">✈️ Flights</Link>
            <Link to="/hotels" className="btn hotels">🏨 Hotels</Link>
            <Link to="/mood-explorer" className="btn mood">🧠 Mood Explorer</Link>
          </div>
        </div>
      </div>
      <section className="packages-section fade-in">
  <video className="packages-video" autoPlay muted loop>
    <source src="https://media.istockphoto.com/id/1319828898/video/durbar-square-kathmandu.mp4?s=mp4-640x640-is&k=20&c=Pw1-JIT4BNBkiA3T6qcrCqksc3bDfJ7N1WvKd0IK52A=" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="packages-overlay">
    <h2>Curated Travel Packages</h2>
    <p>Explore places I've personally visited and recommend with love ✈️</p>
    <div className="package-cards">
      <div className="package-card">🗻 Manali – Snowy Serenity & Solitude</div>
      <div className="package-card">🌊 Goa – Sunset Parties & Beach Vibes</div>
      <div className="package-card">🕌 Jaipur – Royal Palaces & Heritage</div>
      <div className="package-card">🏞️ Rishikesh – Yoga, Ganga & Thrill</div>
      <div className="package-card">🌿 Coorg – Coffee Trails & Nature</div>
      <div className="package-card">🏔️ Ladakh – Mountains & Monasteries</div>
      <div className="package-card">🌆 Mumbai – City of Dreams</div>
      <div className="package-card">🧭 Varanasi – Spiritual Awakening</div>
      <div className="package-card">🏖️ Andaman – Coral Reefs & Clear Waters</div>
    </div>
  </div>
</section>
<section className="destination-gallery fade-in">
  <h2>Wanderlust Gallery</h2>
  <p>Explore the beauty of these handpicked destinations ✨</p>
  <div className="gallery-grid">
    <img src="https://lp-cms-production.imgix.net/2025-01/shutterstock2542346155-cropped.jpg?auto=compress&fit=crop&format=auto&h=800&q=50&w=1200" alt="Goa Beach" />
    <img src="https://images.pexels.com/photos/11538476/pexels-photo-11538476.jpeg" alt="Manali Snow" />
    <img src="https://www.philandgarth.com/wp-content/uploads/2020/08/The-stunning-City-Palace-Jaipur-India-Phil-and-Garth.jpg" alt="Jaipur Palace" />
    <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2024/04/15151103/palm-beach-1.jpeg?tr=w-1200%2Cq-60" alt="Ladakh Mountains" />
    <img src="https://inditales.com/wp-content/uploads/2023/02/riverfront-view-ghats-varanasi.jpg" alt="Varanasi Ghats" />
    <img src="https://static.toiimg.com/thumb/msid-79792907%2Cwidth-748%2Cheight-499%2Cresizemode%3D4%2Cimgsize-159389/.jpg" alt="Andaman Waters" />
   <img src="https://lp-cms-production.imgix.net/2025-01/shutterstock2542346155-cropped.jpg?auto=compress&fit=crop&format=auto&h=800&q=50&w=1200" alt="Goa Beach" />
    <img src="https://images.pexels.com/photos/11538476/pexels-photo-11538476.jpeg" alt="Manali Snow" />
    <img src="https://www.philandgarth.com/wp-content/uploads/2020/08/The-stunning-City-Palace-Jaipur-India-Phil-and-Garth.jpg" alt="Jaipur Palace" />
    <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2024/04/15151103/palm-beach-1.jpeg?tr=w-1200%2Cq-60" alt="Ladakh Mountains" />
    <img src="https://inditales.com/wp-content/uploads/2023/02/riverfront-view-ghats-varanasi.jpg" alt="Varanasi Ghats" />
    <img src="https://static.toiimg.com/thumb/msid-79792907%2Cwidth-748%2Cheight-499%2Cresizemode%3D4%2Cimgsize-159389/.jpg" alt="Andaman Waters" />
            </div>
</section>
<section className="testimonials fade-in">
  <h2>What Travellers Say💖</h2>
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <p>"Absolutely magical experience in Ladakh! Everything was perfectly planned."</p>
      <h4>- Aarti, Delhi</h4>
    </div>
    <div className="testimonial-card">
      <p>"Thanks to this site, I discovered Coorg — it was a green paradise!"</p>
      <h4>- Rahul, Pune</h4>
    </div>
    <div className="testimonial-card">
      <p>"Thanks to this site, I discovered Coorg — it was a green paradise!"</p>
      <h4>- Rahul, Pune</h4>
    </div>
    <div className="testimonial-card">
      <p>"Thanks to this site, I discovered Coorg — it was a green paradise!"</p>
      <h4>- Rahul, Pune</h4>
    </div>
    <div className="testimonial-card">
      <p>"Thanks to this site, I discovered Coorg — it was a green paradise!"</p>
      <h4>- Rahul, Pune</h4>
    </div>
  </div>
</section>
<section className="blog-section fade-in">
  <h2>Travel Tips & Stories ❤️</h2>
  <div className="blog-cards">
    <div className="blog-card">
      <h3>5 Things to Pack for the Himalayas</h3>
      <p>Prepare smartly and enjoy the snow without any surprises!</p>
    </div>
    <div className="blog-card">
      <h3>Best Street Food in Jaipur</h3>
      <p>From kachoris to kulfi, taste royalty without breaking the bank.</p>
    </div>
    <div className="blog-card">
      <h3>Best Street Food in Jaipur</h3>
      <p>From kachoris to kulfi, taste royalty without breaking the bank.</p>
    </div>
    <div className="blog-card">
      <h3>Best Street Food in Jaipur</h3>
      <p>From kachoris to kulfi, taste royalty without breaking the bank.</p>
    </div>
    <div className="blog-card">
      <h3>Best Street Food in Jaipur</h3>
      <p>From kachoris to kulfi, taste royalty without breaking the bank.</p>
    </div>
  </div>
</section>



      {/* About Us Section */}
{/* About Us Section */}
<section className="about-section">
  <video autoPlay muted loop className="about-video">
    <source src="https://media.istockphoto.com/id/1482328578/video/kathmandus-durbar-square-a-timeless-journey.mp4?s=mp4-640x640-is&k=20&c=lbWftR8KAYUgGdCOchixzH1zRs-L6PyyUTj_vIJrI3c=" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="about-content">
    <h2>About Us</h2>
    <p>We are passionate travelers on a mission to help you find your own 'मंज़िल'.</p>
    <div className="about-cards-container">
      <div className="about-card">✨ Personalized Itineraries for Every Mood</div>
      <div className="about-card">🌍 Trusted by Travelers Across the Globe</div>
      <div className="about-card">🚀 Fast, Responsive & Beautiful Experience</div>
      <div className="about-card">🤖 Mood-Based Trip Planning with AI</div>
      <div className="about-card">📦 All-in-One Travel Toolkit</div>
    </div>
  </div>
</section>






    </div>
  );
};

export default LandingPage;
