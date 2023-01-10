import { ChevronRightIcon } from '@heroicons/react/24/outline';

export function GetStarted() {
  const handleForm = (event: any) => event.preventDefault();

  return (
    <form
      onSubmit={handleForm}
      className='mt-3 flex flex-col items-center space-y-3.5 pb-1.5 
      laptop:mt-6 laptop:flex-row laptop:space-y-0'
    >
      <div className='relative w-full'>
        <input
          className='peer h-[48px] w-full rounded-sm pl-2.5 pt-2 
          text-[0.975rem] font-semibold text-black placeholder-transparent outline outline-1 
          outline-gray-500 focus:outline focus:outline-1 
            focus:outline-blue-400 tablet:h-[52px] laptop:h-[60px] 
            laptop:max-w-[492.5px] laptop:rounded-tr-none laptop:rounded-br-none desktop:h-[65px]'
          type='email'
          placeholder='Email address'
          required
        />
        <label
          className='absolute left-2.5 top-1 text-[0.75rem] font-bold 
        text-gray-500 transition-all peer-placeholder-shown:top-3.5
        peer-placeholder-shown:text-[0.875rem] peer-placeholder-shown:font-normal
        peer-focus:top-0.5 peer-focus:text-[0.75rem] peer-focus:font-bold
        laptop:text-[0.795rem] laptop:peer-placeholder-shown:top-5
        laptop:peer-placeholder-shown:text-[0.925rem] laptop:peer-focus:top-1
        laptop:peer-focus:text-[0.795rem] laptop:peer-focus:font-bold'
        >
          Email address
        </label>
      </div>

      <button
        className='flex items-center justify-center space-x-1 rounded-sm 
          bg-red-600 px-3.5 py-2 font-semibold text-white outline-[2.8px] 
          outline-red-900 active:outline laptop:h-[60px] laptop:w-full 
          laptop:max-w-[225px] laptop:space-x-1.5 laptop:rounded-tl-none laptop:rounded-bl-none 
          laptop:text-[1.5rem] desktop:h-[65px] desktop:space-x-2 desktop:text-[1.65rem]'
      >
        <span>Get Started</span>
        <ChevronRightIcon className='h-auto w-[16.5px] transition-all hover:pl-1 laptop:w-6' />
      </button>
    </form>
  );
}
