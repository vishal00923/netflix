import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Nav() {
  return (
    <nav className='w-full px-6 py-6 flex justify-between items-center mb-[8vh] sm:px-8 sm:py-8 sm:mb-[10vh] lg:px-12 lg:mb-[12vh]'>
      <Logo className='w-[80px] h-[auto] sm:w-[100px] md:w-[112px] lg:w-[125px] xl:w-[150px] 2xl:w-[165px]' />
      <div className='flex items-center space-x-4 sm:space-x-6 md:space-x-7 lg:space-x-8'>
        <div>
          <select
            className='bg-black/70 text-white px-2 py-[2px] border-[1px] rounded-sm text-sm sm:py-2 lg:px-3'
            name='language'
            id='language'
          >
            <option
              selected
              lang='en'
              value='/in/'
              data-language='en'
              data-country='IN'
            >
              English
            </option>
            <option
              lang='hi'
              value='/in-hi/'
              data-language='hi'
              data-country='IN'
            >
              हिन्दी
            </option>
          </select>
        </div>

        <div>
          <button className='bg-red-600 text-white text-sm px-2 py-1 rounded-sm sm:px-4 sm:py-[6px] md:px-5 md:py-[8px] lg:font-medium lg:text-[0.925rem]'>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
