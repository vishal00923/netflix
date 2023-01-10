import { useNavigate } from 'react-router-dom';

import { Logo } from '@/components/Logo';

export function Nav() {
  const navigate = useNavigate();

  return (
    <nav
      className='h-[65px] w-full px-6 pt-2 
    tablet:h-[80px] tablet:px-10 tablet:pt-5 laptop:px-9 desktop:px-12'
    >
      <div className='flex items-center justify-between space-x-6 pt-2'>
        <Logo />

        <div
          className='flex items-center space-x-3 pb-[12px] tablet:space-x-6 
        laptop:space-x-7 desktop:space-x-8'
        >
          <select
            className='rounded-sm bg-black px-1 py-[2px]
             text-[0.875rem] font-normal text-white outline outline-1 
             outline-gray-400 tablet:py-[4.5px] tablet:text-[0.938rem] laptop:py-[5px] 
             laptop:px-2 desktop:text-[1rem]'
            name='lang'
            defaultValue='English'
          >
            <option value='/in/' lang='en'>
              English
            </option>
            <option value='/in-hi/' lang='hi'>
              हिन्दी
            </option>
          </select>

          <button
            onClick={() => navigate('/login')}
            className='inline-block w-[65px] rounded-sm bg-red-600 
            px-2 py-1 text-[0.875rem] font-normal tracking-tighter text-white 
            transition-all hover:bg-red-500 tablet:w-[80px] tablet:px-3 
            tablet:py-1.5 tablet:text-[0.9rem] laptop:w-[90px] laptop:text-[1rem]'
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
