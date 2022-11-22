import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function GetStarted() {
  return (
    <form className='flex flex-col items-center mt-3 pb-1.5 space-y-3.5 laptop:flex-row laptop:space-y-0 laptop:mt-6'>
      <div className='w-full relative'>
        <input
          className='peer w-full h-[48px] text-[0.975rem] outline outline-1 outline-gray-500 text-black rounded-sm font-semibold pl-2.5 pt-2 placeholder-transparent focus:outline focus:outline-1 
            focus:outline-blue-400 tablet:h-[52px] laptop:max-w-[492.5px] laptop:h-[60px] laptop:rounded-tr-none laptop:rounded-br-none desktop:h-[65px]'
          type='email'
          placeholder='Email address'
          required
        />
        <label className='text-gray-500 font-bold absolute left-2.5 top-1 text-[0.75rem] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[0.875rem] peer-placeholder-shown:font-normal peer-focus:top-0.5 peer-focus:text-[0.75rem] peer-focus:font-bold laptop:text-[0.795rem] laptop:peer-placeholder-shown:text-[0.925rem] laptop:peer-placeholder-shown:top-5 laptop:peer-focus:top-1 laptop:peer-focus:text-[0.795rem] laptop:peer-focus:font-bold'>
          Email address
        </label>
      </div>

      <button
        className='bg-red-600 text-white font-semibold flex justify-center 
          items-center space-x-1 px-3.5 py-2 rounded-sm laptop:rounded-tl-none laptop:rounded-bl-none laptop:w-full laptop:max-w-[225px] laptop:h-[60px] laptop:text-[1.5rem] desktop:h-[65px] desktop:text-[1.65rem] active:outline outline-[2.8px] outline-red-900 laptop:space-x-1.5 desktop:space-x-2'
      >
        <span>Get Started</span>
        <ChevronRightIcon className='w-[16.5px] h-auto laptop:w-6 transition-all hover:pl-1' />
      </button>
    </form>
  );
}
