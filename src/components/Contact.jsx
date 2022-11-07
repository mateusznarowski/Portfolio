import { useState } from 'react';

const Contact = ({ contactData }) => {
  const [showAlert, setShowAlert] = useState(false);

  const copyEmail = (e, copy = true) => {
    copy && navigator.clipboard.writeText(e.target.textContent);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <section id='contact' className='section contact'>
      <h1 className='section__title'>Contact</h1>
      <div className='contact__email '>
        <a href={`mailto:${contactData.email}`} className='btn btn--icon'>
          Email Me
          <i className='fa-solid fa-envelope' />
        </a>
        <span className='contact__email-low'> or </span>
        <span
          onClick={(e) => copyEmail(e)}
          onCopy={(e) => copyEmail(e, false)}
          title='Click to copy!'
          className={`contact__email-text ${showAlert ? 'contact__email-text--copied' : ''}`}
        >
          {contactData.email}
        </span>
      </div>
      <div className='contact__links'>
        <a href={contactData.github} target='_blank' className='btn btn--icon'>
          Github <i className='fa-brands fa-github' />
        </a>
        <a href={contactData.linkedin} target='_blank' className='btn btn--icon'>
          LinkedIn <i className='fa-brands fa-linkedin' />
        </a>
      </div>
      <div className='contact__cv-download'>
        <a href={contactData.cv_pl} target='_blank' title='CV Mateusz Narowski - PL' className='btn btn--icon'>
          Download CV - PL <i className='fa-solid fa-file-arrow-down' />
        </a>
        <a href={contactData.cv_en} target='_blank' title='CV Mateusz Narowski - EN' className='btn btn--icon'>
          Download CV - EN <i className='fa-solid fa-file-arrow-down' />
        </a>
      </div>
    </section>
  );
};

export default Contact;
