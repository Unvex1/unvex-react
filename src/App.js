import React, { useRef, useState } from "react";
import { enforceCriteria } from "./pages.js";
import "./App.css";
import axios from "axios";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [meeting, setMeeting] = useState("");

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const formRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const elder = enforceCriteria();

    try {
      // Make a POST request to the API
      const response = await axios.post(
        `https://email.dl-unvexed.workers.dev/send?email=${email}&first_name=${firstName}&phone=${mobile}&token=${elder}`
      );
      console.log(response.status);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unvexed | Digital Marketing</title>
      </head>

      <header>
        <div className="container">
          <h1>UNVEXED</h1>
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

      <section id="home" className="hero" ref={homeRef}>
        <div>
          <h2>Why Unvexed?</h2>
          <p>
            Running a small business or startup is tough. We get it. You need
            effective marketing strategies that deliver real results without
            breaking the bank. At Unvexed, we specialize in Facebook ads, Google
            ads, and comprehensive marketing strategies designed to maximize
            your return on ad spend (ROAS) and minimize your cost per click
            (CPC). Our proven scaling strategies ensure your campaigns reach new
            heights.
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
            <h3>Facebook Ads</h3>
            <p>
              Drive targeted traffic to your business with tailored Facebook ad
              campaigns.
            </p>
          </div>
          <div className="service-item">
            <h3>Google Ads</h3>
            <p>
              Reach customers when they're searching for products or services
              like yours.
            </p>
          </div>
          <div className="service-item">
            <h3>Marketing Strategy</h3>
            <p>
              Develop a customized marketing plan that aligns with your business
              goals.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div>
          <h3>Benefits You'll Love</h3>
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
              <p>
                Our team is here for you, providing insights and optimizations
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h3>How It Works</h3>
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
          <h3>Success Stories</h3>
          <blockquote>
            <p>
              “Unvexed transformed our marketing efforts. Their strategies
              brought in more leads at a lower cost. Our sales have doubled in
              just three months!”
            </p>
            <cite>Ramesh Iyer, Founder of TechStart</cite>
          </blockquote>
          <blockquote>
            <p>
              “Thanks to Unvexed, our Google ad campaigns are performing better
              than ever. We're seeing unprecedented growth.”
            </p>
            <cite>Priya Nair, CEO of Nair's Kitchen</cite>
          </blockquote>
          <blockquote>
            <p>
              “Unvexed's Facebook ads have driven traffic and sales beyond our
              expectations. Their team is knowledgeable and responsive.”
            </p>
            <cite>Anjali Menon, Owner of Boutique Bliss</cite>
          </blockquote>
        </div>
      </section>
      <div class="social-icons">
        <h2>Follow Us!</h2>
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
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>What industries do you specialize in?</h4>
            <p>
              We work with various industries, including tech startups,
              e-commerce, and local businesses.
            </p>
          </div>
          <div className="faq-item">
            <h4>How soon can I expect results?</h4>
            <p>
              Many clients see improvements within the first month. However,
              results can vary based on your industry and competition.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do you offer long-term contracts?</h4>
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
                <img
                  src="https://assets-global.website-files.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png"
                  alt=""
                  className="stars"
                />
                <br />
                Thanks for reaching out to us!<br></br> We'll get back to you
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Contact Us</h3>
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
              <label htmlFor="meeting">Schedule a Meeting</label>
              <input
                type="datetime-local"
                id="meeting"
                name="meeting"
                value={meeting}
                onChange={(e) => setMeeting(e.target.value)}
                required
              />

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
