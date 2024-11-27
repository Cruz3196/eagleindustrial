import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Crew from '../../../Assets/crewphoto.jpg';
import './ContentFour.css'

const ContentFour = () => {
    const form = useRef();
    const [notification, setNotification] = useState(''); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
            .then(
                () => {
                    setNotification('Your message has been sent successfully!');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setNotification('Failed to send your message. Please try again.');
                },
        );
    };
  return (
    <section className='Contact-Section'>
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="firstName">Name (required)</label>
                    <div className="name-fields">
                        <input type="text" id="firstName" placeholder="First Name" name="user_name"/>
                        <input type="text" id="lastName" placeholder="Last Name" name="user_name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email (required)</label>
                    <input type="email" id="email" placeholder="Email" name="user_email" />
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
                    <textarea id="message" placeholder="Message" name="message"></textarea>
                </div>
                <button type="submit" className="submit-btn" value="Send">Submit</button>
            </form>
            {notification && <p className="notification">{notification}</p>}
        </div>
        <div className="contact-image">
            <img src={Crew} alt="Team-Photo" />
        </div>
    </section>
  )
}

export default ContentFour