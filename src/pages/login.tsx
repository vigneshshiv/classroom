/**
 * Login
 */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import useSWR from 'swr';
import { GetServerSideProps, GetServerSidePropsContext, Redirect } from 'next';
import { HiEye, HiEyeOff } from 'react-icons/hi';
// Next Auth
import { getCsrfToken, getProviders, getSession, signIn, signOut, useSession } from 'next-auth/react';
// Application
import { useRouter } from 'next/router';


const Login = (props: {props: any}) => {
  console.log(`props - ${JSON.stringify(props)}`);
  // console.log(`any Redirect - ${redirect}`);
  const [providers, setProviders] = useState<any>(null);
  const [csrfToken, setCsrfToken] = useState<any>(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  // Email and Password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  console.log(`Login Status - ${status}`);

  // If it's already authenticated, redirect to home
  // if (Object.is(status, 'authenticated')) {
  //   router.push('/');
  // }

  // useEffect(() => {
  //   const loadConfig = async () => {
  //     if (!Object.is(status, 'loading')) {
  //       if (await providers === null) {
  //         setProviders(await getProviders());
  //         if (await csrfToken === null) {
  //           setCsrfToken(await getCsrfToken());
  //         }
  //       }
  //     }
  //     console.log(`Login Outside if - ${JSON.stringify(providers)}`);
  //   }
  //   loadConfig();
  //   return () => {}
  // });

  const handleSignIn = () => {
    // TODO:
  }

  return (
    <>
      <Head>
        <title>Classroom | Login</title>
      </Head>
      <main className='flex items-center justify-center pt-[6rem]'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-secondary'>Welcome Back!</h2>
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
                <label htmlFor='email' className='text-base text-gray-600'>
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
                <label htmlFor='password' className='text-base text-gray-600'>
                  Password
                </label>
                <div className='flex'>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    autoComplete='current-password'
                    required
                    className='relative block w-full appearance-none rounded-l-md border border-r-0 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-r-[1px] sm:text-sm'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='rounded-r-md border border-l-0 border-gray-300 px-2'
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
                className='group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Sign in
              </button>
            </form>
            <div className='my-[1rem] flex w-full justify-center'>
              <p className='text-base text-gray-400'>
                Not registered yet?{' '}
                <span className='mx-1 font-semibold text-blue-700 cursor-pointer hover:underline'>
                  <Link href='/signup'>Sign up</Link>
                </span>
              </p>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <div className='h-[0.7px] w-[30%] bg-gray-400' />
                <span className='text-base text-gray-700'>or</span>
              <div className='h-[0.7px] w-[30%] bg-gray-400' />
            </div>
            <button 
              onClick={() => signIn(providers['google']?.id)}
              className='flex justify-center items-center w-[60%] mt-2 mx-auto p-2 space-x-4 rounded-md border hover:bg-primary-dark focus:outline-none'
            >
              <Image
                src='/icons/google.svg'
                alt='google-logo'
                width={20}
                height={20}
              />
              <span className='text-base text-secondary'>Continue with Google</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );

}

export default Login;

/**
 * Get Server Side props
 * Reason for Server Side Props is, useEffect async / await call multiple times when props get initialized
 * 
 * @param context 
 * @returns 
 */
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context;
  const session = await getSession({ req });
  console.log(`Login server side props, session - ${session}`);
  return session ? {
    redirect: { 
      destination: '/',
      permanent: false
    }
  } : {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken()
    }
  }
}