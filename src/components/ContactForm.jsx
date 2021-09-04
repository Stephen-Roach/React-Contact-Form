import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function sendEmail(e) {
    e.preventDefault();
    console.log('Checking to see if this works!');
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
      <form onSubmit='sendEmail'>
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
      </form>
    </div>
  );
}

export default ContactForm;
