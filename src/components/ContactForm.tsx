import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import useFetchMessage from '../hooks/useFetchMessage';

import { testEmail } from '../utils/regex';

import { ContactFormProps } from '../types/components/TContactForm';

const statusMessages = {
  default: {
    text: 'Send',
    icon: <i className='fa-regular fa-paper-plane' />,
    className: '',
  },
  sending: {
    text: 'Sending',
    icon: <i className='fa-solid fa-spinner' />,
    className: 'sending',
  },
  succeeded: {
    text: 'Successfully sent',
    icon: <i className='fa-regular fa-circle-check' />,
    className: 'success',
  },
  error: {
    text: 'An error has occurred',
    icon: <i className='fa-solid fa-circle-exclamation' />,
    className: 'error',
  },
  fullfill: {
    text: 'Please fill out the entire form',
    icon: <i className='fa-solid fa-circle-exclamation' />,
    className: 'error',
  },
};

const ContactForm = ({ url }: ContactFormProps) => {
  const initialMessage = { name: '', email: '', message: '' };
  const initialMessageValidity = { name: true, email: true, message: true };

  const [statusMessage, setStatusMessage] = useState(statusMessages.default);
  const [message, setMessage] = useState(initialMessage);
  const [isValid, setFormValidity] = useState(initialMessageValidity);

  const validateInput = (value: string, type: string = 'text') => {
    return type === 'email' ? value.trim() !== '' && testEmail(value) : value.trim() !== '';
  };

  const validateForm = (formMessage: typeof initialMessage) => {
    const isValid = {
      name: validateInput(formMessage.name),
      email: validateInput(formMessage.email, 'email'),
      message: validateInput(formMessage.message),
    };

    setFormValidity(isValid);

    const isFormValid = isValid.name && isValid.email && isValid.message;

    return { isValid, isFormValid };
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;

    setFormValidity((prev) => ({ ...prev, [name]: validateInput(value, type) }));

    setMessage((prev) => ({ ...prev, [name]: value }));
  };

  const [sendMessage, setSendMessage] = useState<boolean>(false);

  const { isLoading, data, error } = useFetchMessage(url, message, [sendMessage]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!validateForm(message).isFormValid) return setStatusMessage(statusMessages.fullfill);

    setSendMessage(true);
    const stopFetching = setTimeout(() => setSendMessage(false), 100);

    return () => clearTimeout(stopFetching);
  };

  const handleFormClear = () => {
    setMessage(initialMessage);
    setFormValidity(initialMessageValidity);
  };

  useEffect(() => {
    if (isLoading) {
      setStatusMessage(statusMessages.sending);
    }

    if (error) {
      setStatusMessage(statusMessages.error);
    }

    if (data) {
      setStatusMessage(statusMessages.succeeded);
      setMessage(initialMessage);

      setTimeout(() => setStatusMessage(statusMessages.default), 3000);
    }
  }, [isLoading, data, error]);

  useEffect(() => {
    if (statusMessage.className === 'error') {
      setStatusMessage(statusMessages.default);
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className='contact__form'>
      <input
        type='text'
        id='name'
        name='name'
        className={`contact__form__input ${!isValid.name ? 'error' : ''}`}
        placeholder='Your name'
        onChange={handleChange}
        value={message.name}
      />

      <input
        type='email'
        id='email'
        name='email'
        className={`contact__form__input ${!isValid.email ? 'error' : ''}`}
        placeholder='you@company.com'
        onChange={handleChange}
        value={message.email}
      />

      <textarea
        id='message'
        name='message'
        className={`contact__form__message ${!isValid.message ? 'error' : ''}`}
        placeholder='How I can help you...'
        onChange={handleChange}
        value={message.message}
      />

      <div className='contact__form__btns'>
        <button
          className={`contact__form__btns__submit ${statusMessage.className} | btn btn--cta btn--icon`}
          disabled={isLoading}
        >
          {statusMessage.text} {statusMessage.icon}
        </button>

        <button className='contact__form__btns__clear | btn btn--cta btn--icon' type='button' onClick={handleFormClear}>
          <i className='fa-regular fa-trash-can' />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
