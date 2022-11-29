import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg';

import Footer from '../components/Footer';
import Select from '../components/Select';

export default function LogIn() {
  const [toggle, setToggle] = useState('hidden');
  const [isChecked, setIsChecked] = useState(true);

  const navigate = useNavigate();

  const handleForm = (event) => event.preventDefault();

  return (
    <div className='w-full h-full login:bg-login-screen login:bg-cover'>
      <div className='bg-black/50'>
        <div className='px-3.5 pt-4 tablet:px-[18px] tablet:pt-[18px] login:px-5 login:pt-5 laptop:px-8 laptop:pt-[22px] desktop:px-12 desktop:pt-6'>
          <img
            onClick={() => navigate('/')}
            className='w-[165px] h-auto cursor-pointer'
            src={logo}
            alt='Netflix'
          />
        </div>

        <div
          className='max-w-[1224px] mx-auto px-4 pb-10 border-b-[1px] 
      border-[#888888] tablet:px-6 tablet:pt-[18px] login:pt-0.5 login:border-none login:mb-10 laptop:mb-11 desktop:mb-12'
        >
          <div className='px-1 py-8 login:bg-black/80 login:z-[10] login:max-w-[432px] login:h-[70vh] login:mx-auto login:px-[58px] login:pt-16 login:mt-6'>
            <h2 className='text-white text-[2.125rem] font-bold pl-2'>
              Sign In
            </h2>
            <form
              onSubmit={handleForm}
              className='px-1.5 py-5 flex flex-col justify-center space-y-4'
            >
              <div className='relative'>
                <input
                  className='peer pt-3.5 outline-none caret-white w-full h-[52px] bg-[#333333] placeholder-transparent rounded-[4px] px-5 placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545] login:w-[300px]'
                  type='email'
                  placeholder='Email or phone number'
                  required
                />
                <label className='transition-all text-[#888888] text-[10.8px] absolute top-1.5 left-5 peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-[0.875rem] peer-focus:top-1.5 peer-focus:left-5 peer-focus:text-[10.8px] peer-focus:font-normal peer-focus:pb-1'>
                  Email or phone number
                </label>
              </div>

              <div className='relative'>
                <input
                  className='peer pt-3.5 outline-none caret-white w-full h-[52px] bg-[#333333] placeholder-transparent rounded-[4px] px-5 placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545]
                login:w-[300px]'
                  type='email'
                  placeholder='Password'
                  required
                />
                <label className='transition-all text-[#888888] text-[10.8px] absolute top-1.5 left-5 peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-[0.875rem] peer-focus:top-1.5 peer-focus:left-5 peer-focus:text-[10.8px] peer-focus:font-normal peer-focus:pb-1'>
                  Password
                </label>
              </div>

              <div className='pt-6'>
                <button className='w-full bg-red-600 text-white font-semibold py-3 rounded-[4px] login:w-[300px]'>
                  Sign In
                </button>
              </div>

              <div className='flex justify-between items-center login:w-[300px]'>
                <div className='flex items-center space-x-1'>
                  <input
                    onChange={() => setIsChecked((prev) => !prev)}
                    className='w-4 h-4'
                    type='checkbox'
                    checked={isChecked}
                  />
                  <span className='text-[#afaeae] text-[13px]'>
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

            <div className='pt-8 px-1'>
              <p className='text-[#888888] text-[15.5px] pb-3'>
                New to Netflix?
                <span
                  onClick={() => navigate('/')}
                  className='text-white text-[16px] pl-1 cursor-pointer hover:underline'
                >
                  Sign up now
                </span>
                .
              </p>
              <p className='text-[#888888] text-[12.5px] pb-5 w-full'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                <span
                  onClick={() => setToggle('')}
                  className={`${
                    toggle.length === 0 && 'hidden'
                  } text-blue-500 text-[13px] cursor-pointer hover:underline`}
                >
                  Learn more.
                </span>
              </p>
              <div
                className={`transition-all ${
                  toggle === 'hidden' ? 'overflow-hidden h-0' : 'h-5'
                }`}
              >
                <p className='max-w-[438px] text-[#8c8c8c] text-[12.6px] leading-[14px] tablet:leading-[16px] tablet:max-w-[618px]'>
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
          <div className='max-w-[980px] mx-auto text-[#8b8b8b] px-6 pt-8 pb-14 tablet:px-8'>
            <Footer />
            <Select />
          </div>
        </div>
      </div>
    </div>
  );
}
