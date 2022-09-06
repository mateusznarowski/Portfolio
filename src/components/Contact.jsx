import { useState } from 'react';

const Contact = () => {
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
        <a href='mailto:matin1608@gmail.com' className='btn btn--icon'>
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
          matin1608@gmail.com
        </span>
      </div>
      <div className='contact__links'>
        <a href='https://github.com/Malelus' target='_blank' className='btn btn--icon'>
          Github <i className='fa-brands fa-github' />
        </a>
        <a href='https://www.linkedin.com/in/mateusz-narowski/' target='_blank' className='btn btn--icon'>
          LinkedIn <i className='fa-brands fa-linkedin' />
        </a>
      </div>
      <div className='contact__cv-download'>
        <a
          href='https://www.dropbox.com/s/w1cm0ldh9dp49oc/CV-Mateusz-Narowski-PL.pdf?dl=1'
          title='CV Mateusz Narowski - PL'
          className='btn btn--icon'
        >
          Download CV - PL <i className='fa-solid fa-file-arrow-down' />
        </a>
        <a
          href='https://www.dropbox.com/s/ir6bn7qikv589u9/CV-Mateusz-Narowski-EN.pdf?dl=1'
          title='CV Mateusz Narowski - EN'
          className='btn btn--icon'
        >
          Download CV - EN <i className='fa-solid fa-file-arrow-down' />
        </a>
      </div>
    </section>
  );
};

export default Contact;
