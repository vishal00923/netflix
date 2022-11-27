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
    <div className='w-full h-full'>
      <div className='max-w-[1224px] mx-auto px-4 pt-3 pb-10 border-b-[1px] border-[#888888] tablet:px-6'>
        <img className='w-[165px] h-auto' src={logo} alt='Netflix' />

        <div className='px-1 py-8'>
          <h2 className='text-white text-[2.125rem] font-bold pl-2'>Sign In</h2>
          <form
            onSubmit={handleForm}
            className='px-1.5 py-5 flex flex-col justify-center space-y-4'
          >
            <div className='relative'>
              <input
                className='peer pt-3.5 outline-none caret-white w-full h-[52px] bg-[#333333] placeholder-transparent rounded-[4px] px-5 placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545]'
                type='email'
                placeholder='Email or phone number'
                required
              />
              <label className='transition-all text-[#888888] text-[0.875rem] absolute peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-focus:top-1.5 peer-focus:left-5 peer-focus:text-[10.8px] peer-focus:font-normal peer-focus:pb-1'>
                Email or phone number
              </label>
            </div>

            <div className='relative'>
              <input
                className='peer pt-3.5 outline-none caret-white w-full h-[52px] bg-[#333333] placeholder-transparent rounded-[4px] px-5 placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545]'
                type='email'
                placeholder='Password'
                required
              />
              <label className='transition-all text-[#888888] text-[0.875rem] absolute peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-focus:top-1.5 peer-focus:left-5 peer-focus:text-[10.8px] peer-focus:font-normal'>
                Password
              </label>
            </div>

            <div className='pt-6'>
              <button className='w-full bg-red-600 text-white font-semibold py-3 rounded-[4px]'>
                Sign In
              </button>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-1'>
                <input
                  onChange={() => setIsChecked((prev) => !prev)}
                  className='w-4 h-4'
                  type='checkbox'
                  checked={isChecked}
                />
                <span className='text-[#afaeae] text-[13px]'>Remember me</span>
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
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{' '}
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
              <p className='max-w-[438px] text-[#8c8c8c] text-[13px] leading-[14px] tablet:leading-[16px] tablet:max-w-[618px]'>
                The information collected by Google reCAPTCHA is subject to the
                Google{' '}
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

      <div className='max-w-[1224px] mx-auto text-[#8b8b8b] px-6 pt-8 pb-14 tablet:px-8'>
        <Footer />
        <Select />
      </div>
    </div>
  );
}
