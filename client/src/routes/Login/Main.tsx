import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Select } from '@/components/Select';

import logo from '@/assets/logo.svg';

export function Main() {
  const [toggle, setToggle] = useState<string>('hidden');
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleForm = (event: any) => event.preventDefault();

  return (
    <div className='h-full w-full login:bg-login-screen login:bg-cover'>
      <div className='bg-black/50'>
        <div className='px-3.5 pt-5 tablet:px-[18px] login:px-5 login:pt-[22px] laptop:px-8 laptop:pt-6 desktop:px-12'>
          <img
            onClick={() => navigate('/')}
            className='h-auto w-[78px] cursor-pointer mobile:w-[160px] login:w-[165px] desktop:w-[180px]'
            src={logo}
            alt='Netflix'
          />
        </div>

        <div
          className='mx-auto max-w-[1224px] border-b-[1px] border-[#888888] px-2 
      pb-[60px] tablet:px-6 tablet:pt-[18px] login:mb-10 login:border-none login:pt-0.5 laptop:mb-11 desktop:mb-12'
        >
          <div className='px-1 pt-5 pb-12 mobile:pt-6 mobile:pb-6 login:z-[10] login:mx-auto login:mt-6 login:h-[72vh] login:max-w-[432px] login:rounded-[4.5px] login:bg-black/70 login:px-[58px] login:pt-[52px]'>
            <h2 className='pl-2 pb-1 text-[2.125rem] font-bold text-white'>
              Sign In
            </h2>
            <form
              onSubmit={handleForm}
              className='flex flex-col justify-center space-y-2.5 px-1.5 py-5'
            >
              <div className='relative pb-1.5'>
                <input
                  className='peer h-[52px] w-full rounded-[4px] bg-[#333333] px-5 pt-3.5 placeholder-transparent caret-white outline-none placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545] login:w-[300px]'
                  type='email'
                  placeholder='Email or phone number'
                  required
                />
                <label className='absolute top-1.5 left-5 text-[10.8px] text-[#888888] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-[0.875rem] peer-focus:top-1.5 peer-focus:left-5 peer-focus:pb-1 peer-focus:text-[10.8px] peer-focus:font-normal'>
                  Email or phone number
                </label>
              </div>

              <div className='relative pb-1.5'>
                <input
                  className='peer h-[52px] w-full rounded-[4px] bg-[#333333] px-5 pt-3.5 placeholder-transparent caret-white outline-none placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545]
                login:w-[300px]'
                  type='email'
                  placeholder='Password'
                  required
                />
                <label className='absolute top-1.5 left-5 text-[10.8px] text-[#888888] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-[0.875rem] peer-focus:top-1.5 peer-focus:left-5 peer-focus:pb-1 peer-focus:text-[10.8px] peer-focus:font-normal'>
                  Password
                </label>
              </div>

              <div className='pt-6'>
                <button className='w-full rounded-[4px] bg-red-600 py-3 font-semibold text-white login:w-[300px]'>
                  Sign In
                </button>
              </div>

              <div className='flex items-center justify-between login:w-[300px]'>
                <div className='flex items-center space-x-1'>
                  <input
                    onChange={() => setIsChecked((prev) => !prev)}
                    className='h-4 w-4'
                    type='checkbox'
                    checked={isChecked}
                  />
                  <span className='text-[13px] text-[#afaeae]'>
                    Remember me
                  </span>
                </div>

                <p className='text-[#afaeae]'>
                  <a className='hover:underline' href='/help/login'>
                    <span className='text-[13px]'>Need help?</span>
                  </a>
                </p>
              </div>
            </form>

            <div className='px-1 mobile:pt-[22px] login:pt-[54px]'>
              <p className='pb-3 text-[15.5px] text-[#888888]'>
                New to Netflix?
                <span
                  onClick={() => navigate('/')}
                  className='cursor-pointer pl-1 text-[16px] text-white hover:underline'
                >
                  Sign up now
                </span>
                .
              </p>
              <p className='w-full pb-3 text-[12.5px] text-[#888888] mobile:pb-6'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                <span
                  onClick={() => setToggle('')}
                  className={`${
                    toggle.length === 0 && 'hidden'
                  } cursor-pointer text-[13px] text-blue-500 hover:underline`}
                >
                  Learn more.
                </span>
              </p>
              <div
                className={`transition-all ${
                  toggle === 'hidden' ? 'h-0 overflow-hidden' : 'h-[11.5px]'
                }`}
              >
                <p className='max-w-[345px] text-[12.5px] leading-4 text-[#8c8c8c] mobile:max-w-[420px] tablet:max-w-[618px] tablet:leading-[16px]'>
                  The information collected by Google reCAPTCHA is subject to
                  the Google{' '}
                  <a
                    className='text-blue-500 hover:underline'
                    target='blank'
                    href='https://policies.google.com/privacy'
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    className='text-blue-500 hover:underline'
                    target='blank'
                    href='https://policies.google.com/terms'
                  >
                    Terms of Service
                  </a>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalised advertising by Google).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-black/70'>
          <div className='mx-auto max-w-[980px] px-6 pt-8 pb-12 text-[#8b8b8b] tablet:px-8'>
            <Footer />
            <Select />
          </div>
        </div>
      </div>
    </div>
  );
}