import React, { useState } from 'react';

import {
  contact,
  visualHeading,
  contactForm,
  closeFormButton,
  name,
  email,
  subject,
  message
} from './Contact.module.scss';

const Contact = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <section className={`grid-wrapper ${contact}`} id="contact">
      <h2>Contact</h2>
      <p className={`${visualHeading} visual-heading`}>
        <span>You Picking Up</span> What I'm Putting Down?
      </p>
      <p>
        If you like what you see, (and how could you not?) why not shoot me an email? I would love
        to talk more about your team dynamic and the products you create. Best case scenario, we
        become best friends. Worst case scenario I make you laugh and we drift apart.
      </p>
      <button type="button" className="button" onClick={() => setFormIsVisible(true)}>
        Shoot me an email
      </button>
      {formIsVisible && (
        <form className={contactForm} action="https://formspree.io/xwkrjjnn" method="POST">
          <h3>{'Hey look, a <Form>!'}</h3>
          <button
            type="button"
            className={closeFormButton}
            onClick={() => setFormIsVisible(false)}
            aria-label="Click to hide the form again"
          >
            +
          </button>
          <label for="name" className={name}>
            <span>Full Name</span>
            <input type="text" name="name" id="name" required />
          </label>

          <label for="email" className={email}>
            <span>Email</span>
            <input type="email" name="email" id="email" required />
          </label>

          <label for="subject" className={subject}>
            <span>Subject Line</span>
            <input type="text" name="subject" id="subject" required />
          </label>

          <label for="message" className={message}>
            <span>Your message</span>
            <textarea name="message" id="message" placeholder="What can I do for you?" required />
          </label>

          <button type="submit" className="button" aria-label="Submit the form">
            Finished
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
