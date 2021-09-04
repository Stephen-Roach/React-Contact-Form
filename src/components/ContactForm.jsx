import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    axios
      .post('/send', { ...state })
      .then((response) => {
        setResult(response.data);
        setState({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later',
        });
      });
  }

  function onInputChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail}>
        <Form.Group controlId='name'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={state.name}
            placeholder='Enter your Full Name'
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            name='email'
            value={state.email}
            placeholder='Enter your email'
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type='text'
            name='subject'
            value={state.subject}
            placeholder='Enter subject'
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            type='text'
            name='message'
            value={state.message}
            placeholder='Enter message'
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
