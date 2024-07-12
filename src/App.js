import React from 'react';
import './App.css';

const services = [
  { title: 'IT Consultancy', icon: 'fas fa-laptop-code' },
  { title: 'Cloud Computing', icon: 'fas fa-cloud' },
  { title: 'Cyber Security', icon: 'fas fa-shield-alt' },
  { title: 'Data Analytics', icon: 'fas fa-chart-line' },
  { title: 'Network Services', icon: 'fas fa-network-wired' },
  { title: 'Software Development', icon: 'fas fa-code' },
  { title: 'Software Development', icon: 'fas fa-code' },
];

const App = () => {
  return (
    <div className="app">
      <header className="hero-section">
        <h1>Services</h1>
      </header>
      <main>
        <div className="content">
          <section className="services-section">
            {services.map((service, index) => (
              <div key={index} className="service-box">
                <i className={`service-icon ${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>Astonished set expression solicitude way admiration</p>
              </div>
            ))}
          </section>
          <aside className="sidebar">
            <div class="boxes-container">
              <div className="contact-box square-card">
                <h4> How can we help you?</h4>
                <p>Contact us at the consulting WP office nearest to you or submit a business inquiry online.</p>
                <button className="btn"><i className="fas fa-envelope"></i> Contacts</button>
              </div>
              <div className="brochure-box square-card">
                <h4> Brochure</h4>
                <p>Excellence is certainly explained how improving household pretended.</p>
                <button className="btn"><i className="fas fa-download"></i> Download Service</button>
                <button className="btn"><i className="fas fa-download"></i> Download Features</button>
              </div>
              <div class="benefits-box square-card">
                <h4>Benefits With Our Service</h4>
                <ul>
                  <li className="benefits-box-items"><i class="fas fa-check-circle"></i> Flexible Solutions</li>
                  <li className="benefits-box-items"><i class="fas fa-clock"></i> 24/7 Unlimited Support</li>
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </main>
      <footer className="footer-section">
        <h2>Need Any Kind Of IT Solution For Your Business?</h2>
        <button className="btn"><i className="fas fa-paper-plane"></i> Get in Touch</button>
      </footer>
    </div>
  );
};

export default App;
