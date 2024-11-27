import React from 'react';
import Crew from '../../../Assets/crewphoto.jpg';
import './ContentFour.css'

const ContentFour = () => {
  return (
    <section className='Contact-Section'>
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">Name (required)</label>
                    <div className="name-fields">
                        <input type="text" id="firstName" placeholder="First Name" />
                        <input type="text" id="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email (required)</label>
                    <input type="email" id="email" placeholder="Email" />
                    <div className="checkbox">
                        <input type="checkbox" id="newsletter" />
                        <label htmlFor="newsletter">Sign up for news and updates</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject (required)</label>
                    <input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message (required)</label>
                    <textarea id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
        <div className="contact-image">
            <img src={Crew} alt="Team-Photo" />
        </div>
    </section>
  )
}

export default ContentFour