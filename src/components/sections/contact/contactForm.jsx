import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { CustomButton } from '../../../interface/styledComponents';

const Form = styled.form`
  --max-width: 52rem;
  --max-width-laptop-lg: 48rem;
  --max-width-laptop: 44rem;
  --max-width-tablet: 40rem;
  --max-width-mobile: 28rem;
  --max-width-mobile-small: 24rem;
  --padding: 1.6rem;

  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  font-family: var(--font-fam-sans);

  @media screen and (max-width: 1364px) {
    max-width: var(--max-width-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    max-width: var(--max-width-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    max-width: var(--max-width-tablet);
  }

  @media screen and (max-width: 480px) {
    max-width: var(--max-width-mobile);
  }

  @media screen and (max-width: 400px) {
    max-width: var(--max-width-mobile-small);
  }
`;

const Label = styled.label`
  color: var(--clr-rose-300);
  font-size: var(--font-size-base);
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;
  margin-bottom: 0.4rem;

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: calc(var(--font-size-base) - 0.1rem);
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: calc(var(--font-size-base) - 0.2rem);
  }

  @media screen and (max-width: 400px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
  }
`;

const Input = styled.input`
  outline: transparent;
  border: none;
  caret-color: var(--clr-rose-300);
  color: var(--clr-stone-200);
  background-color: var(--bg-clr-secondary);
  font-size: calc(var(--font-size-base) - 0.2rem);
  border-radius: 0.4rem;
  padding: 0.8rem 0 0.8rem 0.8rem;
  margin-bottom: 1.6rem;
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;
  transition: outline 0.35s ease;

  &:active,
  &:focus-visible {
    outline: 0.15rem solid var(--clr-rose-300);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`;

const Message = styled.textarea`
  outline: transparent;
  border: none;
  height: 24rem;
  caret-color: var(--clr-rose-300);
  color: var(--clr-white);
  background-color: var(--bg-clr-secondary);
  font-size: calc(var(--font-size-base) - 0.2rem);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  border-radius: 0.4rem;
  padding: 0.8rem;
  margin-bottom: 1.6rem;
  resize: none;
  transition: outline 0.35s ease;

  &:active,
  &:focus-visible {
    outline: 0.15rem solid var(--clr-rose-300);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`;

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
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Label htmlFor='username'>Your name</Label>
      <Input
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <Label htmlFor='email'>Your email</Label>
      <Input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Label htmlFor='message'>Message</Label>
      <Message
        id='message'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <CustomButton
        className='contact-section-submitBtn'
        $outline='0.15rem solid var(--clr-rose-300)'
        $textColor='var(--clr-rose-300)'
        $t='0.8rem'
        $b='0.8rem'
        $brdRadius='0.4rem'
        $hoverTextColor='var(--clr-rose-400)'
        $hoverOutlineColor='var(--clr-rose-400)'
        $disableOutlineColor='var(--clr-stone-400)'
        $disableTextColor='var(--clr-stone-400)'
        $disableBgColor='var(--bg-clr-secondary)'
        $focusOutlineColor='var(--clr-rose-400)'
        $focusTextColor='var(--clr-rose-400)'
        disabled={isSubmiting}
      >
        {isSubmiting ? 'Sending email...' : 'Send'}
      </CustomButton>
    </Form>
  );
}

export default ContactForm;
