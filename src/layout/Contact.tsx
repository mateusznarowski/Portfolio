import { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

import ContactForm from '../components/ContactForm';
import { ContactProps } from '../types/TContact';

const Contact = ({ content }: ContactProps) => {
  const [showIsCopied, setShowIsCopied] = useState<boolean>(false);
  const [, copy] = useCopyToClipboard();

  const { intro, contact } = content;

  const copyEmail = () => {
    copy(contact.email);

    setShowIsCopied(true);

    setTimeout(() => setShowIsCopied(false), 1000);
  };

  return (
    <section id='contact'>
      <div className='container'>
        <div className='contact'>
          <h3 className='contact__title'>{intro.title}</h3>

          <p className='contact__text'>{intro.formText}</p>
          <ContactForm url={contact.form} />

          <p className='contact__text'>{intro.emailText}</p>
          <span onClick={copyEmail} className={`contact__email | copied ${showIsCopied ? 'copied--true' : ''}`}>
            {contact.email}
          </span>

          <p className='contact__text'>{intro.linksText}</p>
          <div className='contact__links'>
            <a href={contact.github} className='contact__links__btn | btn btn--icon' target='_blank'>
              Github <i className='fa-brands fa-github fa-fw' />
            </a>
            <a href={contact.linkedin} className='contact__links__btn | btn btn--icon' target='_blank'>
              LinkedIn <i className='fa-brands fa-linkedin-in fa-fw' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
