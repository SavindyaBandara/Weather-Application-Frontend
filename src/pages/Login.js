import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Card, Input, Button, Form } from 'antd';
import '../styles/Login.css';
import Logo from '../assets/logo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Hardcoded username and password
    const hardcodedUsername = 'savindya@gmail.com';
    const hardcodedPassword = '12345';

    // Check if entered username and password match the hardcoded values
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Redirect user to the main page
      navigate('/main');
    } else {
      // Display error message or handle invalid login
      console.log('Invalid username or password');
    }
  };

  return (
    <div className='page'>
      <img src={Logo} alt='Company Logo' className='logo' />
      <div className='login-container'>
        <Card
          title='Weather Application'
          style={{ width: 300, textAlign: 'center', borderRadius: '15px' }}
        >
          <Form onFinish={handleFormSubmit}>
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
                {
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Please enter a valid email address!',
                },
              ]}
            >
              <Input
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' block onClick={handleFormSubmit}>
                Login 
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;



