import { useState } from 'react';

export function Form() {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleForm = (event: any) => event.preventDefault();

  return (
    <>
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
            <span className='text-[13px] text-[#afaeae]'>Remember me</span>
          </div>

          <p className='text-[#afaeae]'>
            <a className='hover:underline' href='/help/login'>
              <span className='text-[13px]'>Need help?</span>
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
