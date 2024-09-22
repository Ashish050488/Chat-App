import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Form = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const HandleData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const toggleSignInPage = () => {
    setIsSignInPage(!isSignInPage);
    setData({
      username: '',
      email: '',
      password: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className='min-h-screen bg-black w-full flex justify-center items-center'>
      <div className='bg-gray-200 w-8/12 xl:w-4/12 h-[38rem] shadow-[0_0_15px_10px_rgba(225,255,255,0.3)] rounded-lg flex flex-col p-2 m-2 justify-center items-center'>
        <div className='text-4xl font-bold'>Welcome {isSignInPage && 'Back'}</div>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full'>
          <div className='text-xl font-normal text-gray-400'>
            {isSignInPage ? 'Sign In To Explore' : 'Sign up to get started'}
          </div>

          {/* Conditionally render the Name input if it's a Sign-Up page */}
          {!isSignInPage && (
            <Input
              className='mt-5'
              placeholder='Enter your Name'
              name='username'
              value={data.username}
              onChange={HandleData}
              isRequired={true} // Set to true for sign-up
            />
          )}

          <Input
            className='mt-5'
            placeholder='Enter Email'
            type='email'
            name='email'
            value={data.email}
            onChange={HandleData}
            isRequired={true} // Set to true for email
          />

          <Input
            className='mt-5'
            placeholder='Enter Password'
            type='password'
            name='password'
            value={data.password}
            onChange={HandleData}
            isRequired={true} // Set to true for password
          />

          <Button className='mt-10' label='Submit' type='submit' />
        </form>

        <div
          onClick={toggleSignInPage}
          className='m-2 text-xl font-bold cursor-pointer'
        >
          {isSignInPage ? 'Already have an account?' : ''}
          <span className='text-blue-700 font-medium'>
            {isSignInPage ? 'Sign Up' : 'Sign In'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
