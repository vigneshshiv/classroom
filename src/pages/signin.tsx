/**
 * Sign In form
 */
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
// Application
import { User } from 'components/types/types';
import { initCache, removeCache } from 'shared/shared.data'; 

const VALID_EMAIL = 'admin@abc.com';
const SIGNIN_KEY = 'session_data';

const SignIn = () => {
  // Email and Password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Remove the key
    removeCache(SIGNIN_KEY);
    console.log(`Handle signin, email - ${email}, password - ${password}`);
    if (Object.is(VALID_EMAIL, email)) {
      console.log(`Signin successful`);
      let user: User = {
        username: email, 
        email: email,
        loggedIn: true
      };
      initCache(SIGNIN_KEY, user);
      console.log(`Session Initialized`);
    }
  }

  return (
    <>
      <Head>
        <title>Sign in to Classroom</title>
      </Head>
      <main className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>Sign in</h2>
            </div>
            {/* Signin form */}
            <form
              className='mt-4 flex flex-col space-y-4'
              onSubmit={e => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              <div className='flex w-full flex-col space-y-2'>
                <label htmlFor='email' className='text-sm text-gray-600'>
                  Email Address
                </label>
                <input 
                  type='email'
                  id='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='flex w-full flex-col space-y-2'>
                <label htmlFor='password' className='text-sm text-gray-600'>
                  Password
                </label>
                <div className='flex'>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    autoComplete='current-password'
                    required
                    className='relative block w-full appearance-none rounded-l-md border border-r-0 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='rounded-r-md border border-l-0 border-gray-300 px-2 focus:outline-none'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <HiEye className='h-4 w-4 fill-gray-500' title='hide password' />
                    ) : (
                      <HiEyeOff className='h-4 w-4 fill-gray-500' title='show password' />
                    )}
                  </button>
                </div>
              </div>
              <button
                type='submit'
                className='group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Sign in
              </button>
            </form>
            <p className='my-2 flex w-full justify-center text-sm text-gray-700'>
              Not registered yet?{' '}
              <Link className='mx-1 cursor-pointer font-bold text-blue-600 hover:underline' href='/signup'>
                Sign up
              </Link>
            </p>
          </div>
        </div>        

      </main>
    </>
  );
}

export default SignIn;