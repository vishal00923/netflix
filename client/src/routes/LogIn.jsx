import { useState } from 'react';

import logo from '../assets/logo.svg';

export default function LogIn() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='w-full h-full'>
      <div className='max-w-[1224px] mx-auto px-4 py-4'>
        <img className='w-[165px] h-auto' src={logo} alt='Netflix' />

        <div className='px-1 py-8'>
          <h2 className='text-white text-[2.125rem] font-bold pl-2'>Sign In</h2>
          <form className='px-1.5 py-5 flex flex-col justify-center space-y-4'>
            <div className='relative'>
              <input
                className='peer outline-none caret-white w-full h-14 bg-[#333333] placeholder-transparent rounded-[4px] px-5 placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545]'
                type='email'
                placeholder='Email or phone number'
              />
              <label className='transition-all text-[#888888] text-[0.875rem] absolute peer-placeholder-shown:top-[18px] peer-placeholder-shown:left-5 peer-focus:top-1.5 peer-focus:left-5 peer-focus:text-[0.688rem] peer-focus:font-normal'>
                Email or phone number
              </label>
            </div>

            <div className='relative'>
              <input
                className='peer outline-none caret-white w-full h-14 bg-[#333333] placeholder-transparent rounded-[4px] px-5 placeholder:text-[0.875rem] placeholder:font-semibold focus:bg-[#454545]'
                type='email'
                placeholder='Password'
              />
              <label className='transition-all text-[#888888] text-[0.875rem] absolute peer-placeholder-shown:top-[18px] peer-placeholder-shown:left-5 peer-focus:top-1.5 peer-focus:left-5 peer-focus:text-[0.688rem] peer-focus:font-normal'>
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
                  onClick={() => setIsChecked((prev) => !prev)}
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
        </div>
      </div>
    </div>
  );
}
