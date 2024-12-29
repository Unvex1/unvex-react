import React, { useRef, useState } from "react";
import { enforceCriteria } from "./pages.js";
import logo from "./assets/unvex1.png";
import TagManager from "react-gtm-module";
import "./App.css";
from axios from "axios";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const formRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const today = new Date().toISOString().split("T")[0];
  const handleClick = (e) => {
    e.preventDefault();
    handleScroll(formRef);
    setButtonsVisible(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const elder = enforceCriteria();

    try {
      // Make a POST request to the API
      const response = await axios.post(
        `https://email.dl-unvexed.workers.dev/send?email=${email}&first_name=${firstName}&phone=${mobile}&meet_date=${meetingDate}&meet_time${meetingTime}token=${elder}`
      );
      console.log(response.status);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const tagManagerArgs = {
    gtmId: "G-JJ23HS68GD",
  };

  TagManager.initialize(tagManagerArgs);
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unvexed | Digital Marketing</title>
        
      </head>

      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(homeRef);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(servicesRef);
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(testimonialsRef);
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(faqRef);
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <h1>
            <img src={logo} alt="logo" width="25" height="25"></img>
            <a href="/">
              <span>UNVEXED</span>
            </a>
          </h1>
          <a
            href="#form"
            className="contact-btn"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(formRef);
            }}
          >
            Contact Us
          </a>
        </div>
      </header>

      {buttonsVisible && (
        <>
          <div className="floatbcont">
            <a href="/" className="apply-now-button" onClick={handleClick}>
              Apply Now
            </a>
            <a href="/" className="apply-now-button2" onClick={handleClick}>
              Contact Us
            </a>
          </div>
        </>
      )}

      <section id="home" className="hero" ref={homeRef}>
        <div>
          <h2>
            Why <span className="color">Unvexed?</span>
          </h2>
          <p>
            &#8594; Running a small business or startup is tough. We get it. You
            need
            <span className="color"> Effective Marketing Strategies</span> that
            deliver real results without breaking the bank.
          </p>{" "}
          <p>
            <span>&#8594;</span> At <span className="color">Unvexed</span>, we
            specialize in{" "}
            <span className="color">Facebook ads, Google ads,</span> and
            comprehensive marketing strategies designed to maximize your return
            on ad spend <span className="color">(ROAS) </span>and minimize your
            cost per click <span className="color">(CPC)</span>.
          </p>{" "}
          <p>
            &#8594; Our proven scaling strategies ensure your campaigns reach
            new heights.
          </p>
          <a
            href="#form"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(formRef);
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="services" className="services" ref={servicesRef}>
        <div className="con">
          <div className="service-item">
            <h3 className="color">Facebook Ads</h3>
            <p>
              Drive targeted traffic to your business with tailored Facebook ad
              campaigns.
            </p>
          </div>
          <div className="service-item">
            <h3 className="color">Google Ads</h3>
            <p>
              Reach customers when they're searching for products or services
              like yours.
            </p>
          </div>
          <div className="service-item">
            <h3 className="color">Marketing Strategy</h3>
            <p>
              Develop a customized marketing plan that aligns with your business
              goals.
            </p>
          </div>
        </div>
      </section>
      <section className="tools">
        <h2 className="color">Tools</h2>
        <div class="tools-block color2">
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a4fbb8cdbc0807832_fb-ads-manager.webp"
                loading="lazy"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Facebook Ads</div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a7d92dcdb1d15aba2_google-tag-manager.webp"
                loading="lazy"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Google Tag Manager </div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a0274a5a48ed934b0_microsoft-clarity.webp"
                loading="lazy"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Microsoft Clarity</div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a5f79fc1f36521dac_GA4%20(1).webp"
                loading="lazy"
                width="250"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Google Analytics</div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a262efafa72e43241_google-adds-manager.webp"
                loading="lazy"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Google Ads</div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a0274a5a48ed934ab_Asset-4%402x.webp"
                loading="lazy"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Semrush</div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/650d353a7acfb823ade0fa66_mcp-intl.webp"
                loading="lazy"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Convertkit</div>
          </div>
          <div class="tools-wrap">
            <div class="tools-img">
              <img
                src="https://cdn.prod.website-files.com/63c698560a57ab3deb917f5a/6470d70ae005606711474779_image%20407.png"
                loading="lazy"
                width="58"
                alt=""
              ></img>
            </div>
            <div class="tools-name">Zapier</div>
          </div>
        </div>
      </section>
      <section className="about">
        <div>
          <h3>
            Benefits <span className="color">You'll Love</span>
          </h3>
          <p>
            Crafted from a fusion of expertise and passion, we will
            revolutionize your digital presence.
          </p>
          <div className="stats">
            <div className="stat">
              <h4>High ROAS</h4>
              <p>We guarantee a high return on your advertising spend.</p>
            </div>
            <div className="stat">
              <h4>Low CPC</h4>
              <p>Get more clicks for less, maximizing your budget.</p>
            </div>
            <div className="stat">
              <h4>Expert Scaling</h4>
              <p>
                We use advanced scaling strategies to grow your campaigns
                effectively.
              </p>
            </div>
            <div className="stat">
              <h4>Dedicated Support</h4>
              <p>Providing insights and optimizations every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="color">How It Works</h2>
          <ol>
            <li>Free Consultation</li>
            <li>Customized Plan</li>
            <li>Launch Campaigns</li>
            <li>Scale & Grow</li>
          </ol>

          <a
            href="#form"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(formRef);
            }}
          >
            Start Your Project
          </a>
        </div>
      </section>

      <section id="testimonials" className="testimonials" ref={testimonialsRef}>
        <div className="container">
          <h2 className="color">Success Stories</h2>
          <blockquote>
            <p>
              “Unvexed transformed our marketing efforts. Their strategies
              brought in more leads at a lower cost. Our sales have doubled in
              just three months!”
            </p>
            <cite className="color">Ramesh Iyer, Founder of TechStart</cite>
          </blockquote>
          <blockquote>
            <p>
              “Thanks to Unvexed, our Google ad campaigns are performing better
              than ever. We're seeing unprecedented growth.”
            </p>
            <cite className="color">Priya Nair, CEO of Nair's Kitchen</cite>
          </blockquote>
          <blockquote>
            <p>
              “Unvexed's Facebook ads have driven traffic and sales beyond our
              expectations. Their team is knowledgeable and responsive.”
            </p>
            <cite className="color">Anjali Menon, Owner of Boutique Bliss</cite>
          </blockquote>
        </div>
      </section>
      <div class="social-icons">
        <h2 className="color">Follow Us!</h2>
        <a href="#home" title="facebook">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
        </a>

        <a href="#home" title="instagram">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>

        <a href="#home" title="linkedin">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>

      <section id="faq" className="faq" ref={faqRef}>
        <div className="container">
          <h3 className="color">Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4 className="color">What industries do you specialize in?</h4>
            <p>
              We work with various industries, including tech startups,
              e-commerce, and local businesses.
            </p>
          </div>
          <div className="faq-item">
            <h4 className="color">How soon can I expect results?</h4>
            <p>
              Many clients see improvements within the first month. However,
              results can vary based on your industry and competition.
            </p>
          </div>
          <div className="faq-item">
            <h4 className="color">Do you offer long-term contracts?</h4>
            <p>
              We believe in earning your business every month. Our services are
              available on a month-to-month basis.
            </p>
          </div>
        </div>
      </section>
      <section id="form" className="contact-form" ref={formRef}>
        <div className="container">
          {formSubmitted ? (
            <div className="testimonial-style">
              <p id="thankYouMessage">
                <img src="../p1.png" alt="" className="stars" />
                <br />
                Thanks for reaching out to us!<br></br> We'll get back to you
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="color">Contact Us</h2>
              <label htmlFor="firstName">Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <label htmlFor="meetingDate">Schedule a Meeting</label>
              <input
                type="date"
                id="meeting"
                name="meeting"
                min={today}
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                required
              />

              <label htmlFor="meetingTime"></label>
              <input
                type="time"
                id="meeting"
                name="meeting"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                list="meeting-times"
                required
              />
              <datalist id="meeting-times">
                <option value="18:30" label="6:30 PM"></option>
                <option value="19:00" label="7:00 PM"></option>
                <option value="19:30" label="7:30 PM"></option>
                <option value="20:00" label="8:00 PM"></option>
                <option value="20:30" label="8:30 PM"></option>
                <option value="21:00" label="9:00 PM"></option>
                <option value="21:30" label="9:30 PM"></option>
              </datalist>

              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-nav">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(homeRef);
              }}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(servicesRef);
              }}
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(testimonialsRef);
              }}
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(faqRef);
              }}
            >
              FAQ
            </a>
          </div>
          <p>&copy; 2024 Unvexed. All rights reserved.</p>
        </div>
      </footer>
    </html>
  );
}

export default App;
