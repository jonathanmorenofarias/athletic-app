import React from "react";
import '../styles/newsletter.css';

function Newsletter() {
    return (
      <div className="newsletter-contain">
        <p className="newsletter-title">Subscribe to get the latest news on our products!</p>
        <div>
            <input className="newsletter-input" type="text" placeholder="Email"/>
            <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
    );
  }

export default Newsletter;