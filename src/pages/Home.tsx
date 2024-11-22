import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 8 + 2,
    color: `hsla(${Math.random() * 360}, 70%, 70%, 0.6)`,
  }));

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            scale: 0,
          }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 200 - 100],
            y: [particle.y, particle.y + Math.random() * 200 - 100],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            borderRadius: '50%',
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <div className="frame-1949">
        <Particles />
        <p className="request-and-arrive-in-co">
          REQUEST AND ARRIVE IN COMFORT CONVENIENCE AND STYLE
        </p>
        <div className="frame-1948">
          <a 
            href="https://apps.apple.com/ng/app/tookuai/id6477813473" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-primary-with-icon"
          >
            <div className="frame-1">
              <p className="button-name">Download for IOS</p>
            </div>
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.tookuai.order&hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-primary-with-icon-1"
          >
            <div className="frame-11">
              <p className="button-name-1">Download for Android</p>
            </div>
          </a>
        </div>
        <div className="iphone-frame">
          <video 
            className="app-demo-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/poster.jpg"
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="features-section">
        <div className="features-content">
          <div className="features-grid">
            <Link to="/ride" className="feature-card">
              <div className="feature-image">
                <img src="/src/assets/images/ride.jpg" alt="RIDE" />
              </div>
              <h3>RIDE</h3>
              <p>Unleash Your Imagination: Book a Batmobile in Minutes.</p>
            </Link>
            <Link to="/partners" className="feature-card">
              <div className="feature-image">
                <img src="/src/assets/images/partner.jpeg" alt="Partner" />
              </div>
              <h3>YOUR CAR, YOUR PROFITS</h3>
              <p>The Premium Solution for Monetizing Your Luxury Vehicle as a Partner.</p>
            </Link>
            <Link to="/corporate" className="feature-card">
              <div className="feature-image">
                <img src="/src/assets/images/corporate.jpg" alt="Corporate" />
              </div>
              <h3>CORPORATE</h3>
              <p>Tailored transportation solutions for businesses, featuring employee rides and corporate event services.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;