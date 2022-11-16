import logo from '../assets/logo.svg';

export default function Nav() {
  return (
    <nav
      className='px-5 pt-5 w-full h-[65px] 
    tablet:px-10 tablet:pt-6 tablet:h-[80px] laptop:px-9 desktop:px-12'
    >
      <div className='flex justify-between items-end pt-2'>
        <img
          className='w-[90px] h-[auto] tablet:w-[125px] 
          laptop:w-[150px] desktop:w-[180px]'
          src={logo}
          alt='Netflix'
        />

        <div className='flex items-center space-x-3 tablet:space-x-6 laptop:space-x-7 desktop:space-x-8'>
          <select
            className='bg-black text-white tracking-tighter px-1 py-1
             outline outline-[#ffffffe0] outline-1 text-[0.875rem] 
             font-semibold tablet:py-1.5 tablet:text-[0.938rem] laptop:py-2 laptop:px-2 desktop:text-[1rem]'
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
            className='bg-red-600 text-white tracking-tighter inline-block 
            px-2 py-1 text-[0.8rem] rounded-sm font-semibold tablet:px-3 
            tablet:py-1.5 tablet:text-[0.9rem] laptop:text-[1rem] transition-all hover:bg-red-400'
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
