import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const labelStyles =
  'text-textColorMainHover text-base tracking-wide md:text-lg';
const inputStyles =
  'bg-bgColorMain w-full text-textColorMain caret-textColorSecondary rounded-md shadow-lg text-sm tracking-wider px-2 py-1 border-none outline outline-1 outline-bgColorContrast focus-visible:outline-textColorSecondary transition-all duration-300';

function ContactForm() {
  const formRef = useRef();
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
      id='contact-me'
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
        className='bg-bgColorMain py-1 px-2 text-textColorMain w-full rounded-md shadow-lg text-sm h-72 outline outline-1 outline-bgColorContrast focus-visible:outline-textColorSecondary transition-all duration-300 sm:h-60 md:h-52'
        id='message'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        className='bg-bgColorMain shadow-lg rounded-md tracking-wide py-1 text-base text-textColorMain outline outline-1 outline-bgColorContrast border-none hover:text-textColorSecondary hover:outline-textColorSecondary focus-visible:text-textColorSecondary focus-visible:outline-textColorSecondary transition-all duration-300 md:text-lg'
        disabled={isSubmiting}
      >
        {isSubmiting ? 'Sending email...' : 'Send'}
      </button>
    </form>
  );
}

export default ContactForm;
