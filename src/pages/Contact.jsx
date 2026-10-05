import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success' or 'error' or 'sending'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulating EmailJS / Backend integration delay
    setTimeout(() => {
      // In a real implementation, you would call your email service here
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      //   .then((result) => setStatus('success'), (error) => setStatus('error'));
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container container animate-fade-in">
      <div className="contact-content">
        
        <div className="contact-info-section">
          <h1 className="contact-title">Have a question or need help?</h1>
          <p className="contact-desc">
            Whether you're looking for the right frame or need help with your prescription, our team is ready to assist.
          </p>

          <div className="info-items">
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>support@lensmatch.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+63 2 8XXX XXXX</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Clinic address</h4>
                <p>123 Sample Street, Quezon City, Metro Manila</p>
              </div>
            </div>
            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h4>Clinic hours</h4>
                <p>Mon - Sat, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="info-item">
              <MessageCircle className="info-icon" />
              <div>
                <h4>Social</h4>
                <p>@lensmatch.ph</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-card">
            <h3 className="form-title">Send us a message</h3>
            
            {status === 'success' && (
              <div className="alert success">Your message has been sent successfully.</div>
            )}
            {status === 'error' && (
              <div className="alert error">Unable to send your message. Please try again.</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="e.g. Juan" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="e.g. Juan@gmail.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Looking for Frames">Looking for Frames</option>
                  <option value="Reservation Concern">Reservation Concern</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  placeholder="Tell us how we can help you" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn form-submit-btn" 
                disabled={status === 'sending'}
              >
                <Send size={18} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
