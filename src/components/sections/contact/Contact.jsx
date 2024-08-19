import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const labelStyles = 'text-blue-500 text-lg tracking-wide';
const inputStyles =
  'bg-bgColorMain w-full text-stone-200 caret-blue-500 rounded-md shadow-lg text-sm tracking-wider px-2 py-1 border-none outline outline-1 outline-bgColorContrast focus-visible:outline-blue-500 transition-all duration-300';

function ContactForm() {
  const formRef = useRef();
  const { theme } = useContext(ThemeContext);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE;
  const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE;
  const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !message) return;
    setIsSubmiting(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setUsername('');
          setEmail('');
          setMessage('');
          toast.success('Email sent successfully.');
        },
        (error) => {
          toast.error(`Something went wrong: ${error}`);
        }
      )
      .finally(() => setIsSubmiting(false));
  }

  return (
    <form
      className='flex flex-col gap-3 max-w-md bg-bgColorSecondary rounded-md shadow-xl outline outline-1 outline-bgColorContrast p-3'
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label
        className={labelStyles}
        htmlFor='username'
      >
        Your Name
      </label>
      <input
        className={inputStyles}
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label
        className={labelStyles}
        htmlFor='email'
      >
        Your Email
      </label>
      <input
        className={inputStyles}
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label
        className={labelStyles}
        htmlFor='message'
      >
        Message
      </label>
      <textarea
        className='bg-bgColorMain py-1 px-2 text-stone-200 w-full rounded-md shadow-lg text-sm h-52 outline outline-1 outline-bgColorContrast focus-visible:outline-blue-500 transition-all duration-300'
        id='message'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        className='bg-bgColorMain shadow-lg rounded-md tracking-wide py-1 text-lg text-stone-200 outline outline-1 outline-bgColorContrast border-none hover:text-blue-500 hover:outline-blue-500 focus-visible:text-blue-500 focus-visible:outline-blue-500 transition-all duration-300'
        disabled={isSubmiting}
      >
        {isSubmiting ? 'Sending email...' : 'Send'}
      </button>
    </form>
  );
}

export default ContactForm;
