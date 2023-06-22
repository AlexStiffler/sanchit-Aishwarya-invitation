import "./App.css";
import React from "react";
import Confetti from "react-confetti";
import "@fontsource/kalam";
import "@fontsource/lobster";
import { ReactComponent as Whatsappicon } from "./icons8-whatsapp.svg";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <>
      <Confetti />
      <div className="canvas-bg"></div>
      <canvas id="world"></canvas>
      <header id="header">
        <div className="container-fluid d-flex justify-content-between align-items-center"></div>
      </header>
      <section id="hero">
        <div className="hero-container">
          {/* <img
            src="https://res.cloudinary.com/website-for-sure/image/upload/c_scale,w_50/v1648818868/lord-ganesh-red_ptdoa0.png"
            className="img-fluid"
            alt="img"
          /> */}
          <h2 className="my-1">You're Invited!</h2>
          <h3 className="join">Join us for a reception celebration of</h3>
          <img
            src="https://res.cloudinary.com/vac-global-education-img/image/upload/ar_1:1,bo_5px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_200/v1687414709/arjun-kartha-photography-portfolio-6.png"
            className="img-fluid"
            alt="Sanchit-Aishwarya"
          />
          <h3 className="akhil-jyoti">
            Sanchit <span>weds</span> Aishwarya
          </h3>
          <div>
            <div className="text-center decorated">
              <hr className="date-line" />
              <span>
                <CountdownTimer date="2023-06-27" />
                {/* Feb 06<sup>th</sup>,2023 */}
              </span>
              <hr className="date-line" />
              <a
                href="https://goo.gl/maps/wDaNvv8vzfMqFBeS7"
                className="btn btn-outline-warning text-yellow"
              >
                Take me to Venue!
              </a>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section>
          <div className="container">
            <div className="section-title mb-5">Ceremony</div>
            <div className="row">
              <div className="col-lg-4 col-sm-12 mt-2 mb-2">
                <div className="event-description-container">
                  <div className="event-description">
                    <h3 id="" className="event-name d-block d-md-none">
                      Reception
                    </h3>
                    <div id="" className="event-date">
                      <img
                        src="https://res.cloudinary.com/vac-global-education-img/image/upload/v1687418029/calendar.png"
                        className="mt-2 mb-2"
                      />
                      <br />
                      <i className="far fa-calendar-alt"></i>June 27, 2023
                      <br />{" "}
                    </div>
                    <br />
                    <br />
                    <address>
                      <span id="" className="event-map">
                        <img
                          src="https://res.cloudinary.com/vac-global-education-img/image/upload/v1687418029/location.png"
                          className="mb-2"
                        />
                        <br />
                        <i className="fas fa-map-marker-alt"></i>50, Niti Marg,
                        Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi
                        110021
                      </span>
                    </address>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            {/* <div className="section-title">
              <h2 className="rsvp">RSVP</h2>
            </div> */}
            <div className="form">
              <div className="php-email-form mt-3 text-center">
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=919780169070&text=Hi%20Sanchit%2C%20Congratulations!%20I%20%20will%20be%20attending%20your%20reception!"
                  className="btn btn-outline-success mb-5"
                >
                  <Whatsappicon className="whatsappbtn" />
                  Send RSVP with WhatsApp
                </a>
                <br />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="container">
          <div className="copyright text-center">
            We take pleasure in inviting you and your family to seek the
            blessing on the occasion.
            <br />
            <br />
            Welcome by{" "}
            <strong>
              <span>Arora </span>
            </strong>
            Family
            <br />
            <br />
            <hr />
          </div>
          <div className="credits">Created with awesomeness!</div>
        </div>
      </footer>
    </>
  );
}

export default App;
