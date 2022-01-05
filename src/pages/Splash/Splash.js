import React, { useEffect, useRef, useState } from "react";
import * as images from "../../assets/backgrounds/bgs";
import "./Splash.css";

export default function Splash() {
  const featureRef = useRef(null);
  const [email, setEmail] = useState("");
  useEffect(() => {
    let top = featureRef.current?.getBoundingClientRect().top;
    let height = featureRef.current?.getBoundingClientRect().height;
    top <= height * 0.75 ? console.log("fade") : console.log({ top, height });
  }, [featureRef]);

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
      <section
        ref={featureRef}
        className="feature"
        style={{
          backgroundImage: `url(${images.img1})`,
        }}
      >
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
      <section className="feature">
        <div className="box">
          <h1>Complete 100% of Your Projects 100% of the Time.</h1>
          <p>
            See your productivity grow with our Troll ProgressTracker Technology
          </p>
        </div>
      </section>
      <section className="feature">
        <div className="box">
          <h1>
            Start tracking your progress with a free trial of Troll today!
          </h1>
          <p>Sign up now and get 3 months free.</p>
        </div>
      </section>
      <section className="feature">
        <div className="box">
          <h1>What’s holding you back? </h1>
          <form>
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
            <button className="btn">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  );
}

/**
 * Don’t miss the forest for the trees
Troll is the All-in-one Productivity app you need to meet your goals.
Deadlines don’t have to be a pain. Troll keeps you and your team accountable.
Set detailed reminders and notify all stakeholders with critical updates
Complete 100% of your Projects 100% of the Time
See your productivity grow with our Troll Progress Tracker Technology
We Troll you now so your boss doesn’t later
A good strategy isn’t enough. You need to track your performance if you want to succeed.
Start tracking your progress with a free trial of BRAND today!
Sign up now and get 3 months free!
Everything you need to start seeing results
What’s holding you back? Tell our community of Trolls and find out if Troll is right for your team
 */
