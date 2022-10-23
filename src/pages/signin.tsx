/**
 * Signin with User Id (email) or Google Authentication
 */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/router';
import { HiEye, HiEyeOff } from 'react-icons/hi';
// Next Auth
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getCsrfToken, getProviders, getSession, signIn, useSession } from 'next-auth/react';

const SignIn = (props: any): JSX.Element => {
  const { data: session, status } = useSession();
  const router = useRouter();
  // Email and Password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // If it's already authenticated, redirect to home
  if (Object.is(status, 'authenticated')) {
    router.push('/');
  }

  /**
  * Prisma Role based access for Teacher & Student
  */
  const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await signIn(props.providers['credentials'].id, {
      email: email,
      password: password,
      redirect: false
    });
    console.log(`SignIn result - ${JSON.stringify(result)}`);
    if (result && Object.is(result.error, null)) {
      router.push('/');
    }
  }

  return (
    <>
      <Head>
        <title>Classroom | Signin</title>
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
              onSubmit={handleSignIn}
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
              onClick={() => signIn(props.providers['google']?.id)}
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

export default SignIn;

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