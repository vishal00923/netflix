import logo from '../assets/logo.svg';

export default function Nav() {
  return (
    <nav
      className='px-5 pt-4 w-full h-[65px] 
    tablet:px-10 tablet:pt-5 tablet:h-[80px] laptop:px-9 desktop:px-12'
    >
      <div className='flex justify-between items-center space-x-6 pt-2'>
        <img
          className='w-[90px] h-[auto] tablet:w-[125px] 
          laptop:w-[150px] desktop:w-[180px]'
          src={logo}
          alt='Netflix'
        />

        <div className='flex items-center pb-[12px] space-x-3 tablet:space-x-6 laptop:space-x-7 desktop:space-x-8'>
          <select
            className='bg-black text-white px-1 py-[2px]
             outline outline-gray-400 outline-1 rounded-sm text-[0.875rem] 
             font-normal tablet:py-[4.5px] tablet:text-[0.938rem] laptop:py-[5px] laptop:px-2 desktop:text-[1rem]'
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
            className='w-[65px] bg-red-600 text-white tracking-tighter inline-block 
            px-2 py-1 text-[0.875rem] rounded-sm font-normal tablet:px-3 
            tablet:py-1.5 tablet:text-[0.9rem] tablet:w-[80px] laptop:text-[1rem] laptop:w-[90px] transition-all hover:bg-red-500'
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
