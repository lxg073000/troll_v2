import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as images from "../../assets/backgrounds/bgs";
import "./Splash.css";

export default function Splash() {
  window.document.title = "Troll";
  const featureRef = useRef(null);
  const [email, setEmail] = useState("");
  useEffect(() => {
    let top = featureRef.current?.getBoundingClientRect().top;
    let height = featureRef.current?.getBoundingClientRect().height;
    top <= height * 0.75 ? console.log("fade") : console.log({ top, height });
  }, [featureRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="splash">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${images.img15})`,
        }}
      >
        <div className="box">
          <h1>Troll</h1>
        </div>
      </section>
      <section ref={featureRef} className="feature">
        <div className="box">
          <h1>
            Troll is the All-in-one Productivity Service You Need to Meet Your
            Goals.
          </h1>
          <p>
            Don’t miss the forest for the trees. Troll makes it easy for you and
            your team to tackle large projects with less headaches.
          </p>
        </div>
      </section>
      <section
        ref={featureRef}
        className="testimonal"
        style={{
          backgroundImage: `url(${images.img8})`,
        }}
      >
        <div className="box">
          <h1>I love Troll so much</h1>
          <p>My team and I couldn't be happier with the product.</p>
          <p>-Emily P.</p>
        </div>
      </section>
      <section className="feature">
        <div className="box">
          <h1>
            Deadlines don’t have to be a pain. Troll keeps you and your team
            accountable.
          </h1>
          <p>
            Automate targeted reminders and notify stakeholders with critical
            updates.
          </p>
        </div>
      </section>
      <section
        className="testimonal cta demo"
        style={{
          backgroundImage: `url(${images.img18})`,
        }}
      >
        <div className="box">
          <h1>We complete 100% of our projects 100% of the time.</h1>
          <p>Enjoy 3 free months of ProjectPremium.</p>
          <Link className="nav-link btn" to="/signup">
            Free Trial Account
          </Link>
        </div>
      </section>

      <section
        className="feature email"
        style={{
          backgroundImage: `url(${images.img4})`,
        }}
      >
        <div className="box">
          <h1>What’s holding you back? </h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span>
                Tell our community of Trolls and find out if Troll is right for
                your team!
              </span>
              <textarea></textarea>
              <label>
                <span>Email:</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </label>
            <button onClick={handleSubmit} className="btn">
              Contact Us
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
