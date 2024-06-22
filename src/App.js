import { useState } from "react";
import { enforceCriteria } from './pages.js';
import "./App.css";
import axios from 'axios';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  const elder = enforceCriteria();

  try {
    // Make a POST request to the API
    const response = await axios.post(`https://email.dl-unvexed.workers.dev/send?email=${email}&first_name=${firstName}&last_name=${lastName}&phone=${mobile}&token=${elder}`);
    console.log(response.status)
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
        <title>Unvex | Digital Marketing</title>
      </head>
      <body>
        <header>
          <div className="container">
            <h1>UNVEX</h1>
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </nav>
            <a href="#form" className="contact-btn">
              Contact Us
            </a>
          </div>
        </header>

        <section id="home" className="hero">
          <div>
            <h2>Grow Your Business with Our Digital Marketing Solutions</h2>
            <p>
              Unlock the power of digital marketing to reach your target
              audience and boost your sales.
            </p>
            <a href="#form" className="btn-primary">
              Get Started
            </a>
          </div>
        </section>

        <section id="services" className="services">
          <div className="con">
            <div className="service-item">
              <h3>SEO</h3>
              <p>Search Engine Optimization</p>
            </div>
            <div className="service-item">
              <h3>PPC</h3>
              <p>Pay Per Click</p>
            </div>
            <div className="service-item">
              <h3>SMM</h3>
              <p>Social Media Marketing</p>
            </div>
            <div className="service-item">
              <h3>PM</h3>
              <p>Performance Marketing</p>
            </div>
          </div>
        </section>

        <section className="about">
          <div>
            <h3>About Us</h3>
            <p>
              Crafted from a fusion of expertise and passion, we will
              revolutionize your digital presence.
            </p>
            <div className="stats">
              <div className="stat">
                <h4>4</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>59</h4>
                <p>Team Members</p>
              </div>
              <div className="stat">
                <h4>2,382</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>829</h4>
                <p>Clients Served</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <h3>How We Work to Grow Your Business</h3>
            <ol>
              <li>Understanding Your Needs</li>
              <li>Creating a Custom Strategy</li>
              <li>Data-Driven Execution</li>
              <li>Continuous Optimization</li>
            </ol>

            <a href="#form" className="btn-primary">
              Start Your Project
            </a>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h3>Testimonials</h3>
            <blockquote>
              <p>
                "Genius transformed our business with innovative digital
                marketing. Their expertise boosted our online presence and
                sales. We're thrilled with the results!"
              </p>
              <cite>Marissa Laurent</cite>
            </blockquote>
            <blockquote>
              <p>
                "Genius transformed our business with innovative digital
                marketing. Their expertise boosted our online presence and
                sales. We're thrilled with the results!"
              </p>
              <cite>Marissa Laurent</cite>
            </blockquote>
            <blockquote>
              <p>
                "Genius transformed our business with innovative digital
                marketing. Their expertise boosted our online presence and
                sales. We're thrilled with the results!"
              </p>
              <cite>Marissa Laurent</cite>
            </blockquote>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-item">
              <h4>What services does Genius Digital Marketing Agency offer?</h4>
              <p>
                We offer a wide range of digital marketing services including
                SEO, PPC, SMM, and Email Marketing.
              </p>
            </div>
            <div className="faq-item">
              <h4>
                What makes Genius different from other digital marketing
                agencies?
              </h4>
              <p>
                Our unique blend of creativity and data-driven strategies sets
                us apart.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can you manage my entire digital marketing campaign?</h4>
              <p>
                Yes, we provide comprehensive management for all aspects of your
                digital marketing efforts.
              </p>
            </div>
          </div>
        </section>
        <section id="form" className="contact-form">
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
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} required />

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={lastName}
                  onChange={(e) => setLastName(e.target.value)} required />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} required />

                <label for="mobile">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" value={mobile}
                  onChange={(e) => setMobile(e.target.value)} required />

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
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQ</a>
            </div>
            <p>&copy; 2024 Unvex. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
