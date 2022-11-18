import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Intro() {
  return (
    <main className='max-w-[920px] py-14 mx-auto px-6 tablet:py-[85px] tablet:px-10 tablet:max-w-[620px] laptop:max-w-[800px] laptop:py-24 desktop:py-32'>
      <div className='py-8'>
        <h1 className='text-white text-[1.68rem] text-center leading-[32px] tablet:text-[2.8rem] tablet:leading-[48px] laptop:text-[3.75rem] laptop:leading-[60px] desktop:text-[4.125rem] desktop:leading-[70px]'>
          Unlimited movies, TV shows and more.
        </h1>
        <div className='w-full flex flex-col items-center'>
          <p className='text-white text-[1.2rem] mt-5 tablet:text-[1.35rem] laptop:text-[1.5rem] desktop:text-[1.65rem]'>
            Watch anywhere. Cancel anytime.
          </p>
          <p className='max-w-[320px] text-white text-center text-[1.1rem] mt-4 leading-[25px] tablet:text-[1.2rem] tablet:max-w-[425px] laptop:max-w-[680px] laptop:mt-5'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
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
            <ChevronRightIcon className='w-[16.5px] h-auto laptop:w-6' />
          </button>
        </form>
      </div>
    </main>
  );
}
