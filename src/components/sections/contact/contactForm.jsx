import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { CustomButton } from '../../../interface/styledComponents';

const Form = styled.form`
  --max-width: 52rem;
  --padding: 1.6rem;

  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  font-family: var(--font-fam-sans);
`;

const Label = styled.label`
  color: var(--clr-rose-300);
  font-size: var(--font-size-base);
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;
  margin-bottom: 0.4rem;
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
`;

function ContactForm() {
  const formRef = useRef();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !message) return;
    setIsSubmiting(true);

    emailjs
      .sendForm('service_3zlsq96', 'template_7x1zqr6', formRef.current, {
        publicKey: '_H6Bahz7VguL2CFg0',
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
        disabled={isSubmiting}
      >
        {isSubmiting ? 'Sending email...' : 'Send'}
      </CustomButton>
    </Form>
  );
}

export default ContactForm;
