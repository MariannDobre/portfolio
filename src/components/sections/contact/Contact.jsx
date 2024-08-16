import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

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
      className='flex flex-col gap-3 max-w-[420px] bg-bgColorSecondary rounded-md shadow-xl outline outline-1 outline-bgColorContrast p-3'
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label
        className='text-blue-500 text-lg tracking-wide'
        htmlFor='username'
      >
        Your Name
      </label>
      <input
        className='bg-bgColorMain text-stone-200 caret-blue-500 rounded-md shadow-lg text-sm tracking-wider px-2 py-1 border-none outline outline-1 outline-bgColorContrast'
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label
        className='text-blue-500 text-lg tracking-wide'
        htmlFor='email'
      >
        Your Email
      </label>
      <input
        className='rounded-md shadow-lg text-sm'
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label
        className='text-blue-500 text-lg tracking-wide'
        htmlFor='message'
      >
        Message
      </label>
      <textarea
        className='rounded-md shadow-lg text-sm h-[160px]'
        id='message'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        className=''
        disabled={isSubmiting}
      >
        {isSubmiting ? 'Sending email...' : 'Send'}
      </button>
    </form>
  );
}

export default ContactForm;
