import { IoChevronForwardOutline } from 'react-icons/io5';

export default function Main() {
  return (
    <main className='w-full max-w-[920px] m-auto h-full sm:px-2 sm:py-2'>
      <div className='mb-2 lg:mb-4'>
        <div className='mb-4 max-w-[450px] m-auto sm:max-w-[520px] xl:max-w-[620px]'>
          <h1 className='text-white text-[1.75rem] text-center leading-[1.175] sm:text-[2.75rem] md:text-[2.975rem] lg:text-[3rem] lg:leading-[1.195] xl:text-[3.375rem] xl:leading-[1.275] 2xl:text-[3.975rem]'>
            Unlimited movies, TV shows and more.
          </h1>
        </div>

        <div className='mb-4 lg:mb-6'>
          <p className='text-white text-[1.175rem] text-center sm:text-[1.725rem] lg:text-[1.625rem] lg:px-2 xl:px-3 2xl:px-4'>
            Watch anywhere. Cancel anytime.
          </p>
        </div>

        <div className='max-w-[320px] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[720px] m-auto'>
          <p className='text-white text-[1.125rem] text-center sm:text-[1.225rem] md:text-[1.425rem] lg:text-[1.175rem] lg:px-2 xl:px-3 2xl:px-4'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>

      <form className='flex flex-col items-center space-y-10 sm:space-y-12 lg:flex-row lg:items-center  lg:justify-center lg:space-y-0'>
        <div className='relative'>
          <input
            className='peer min-w-[450px] h-12 border-none focus:outline-none px-2 py-2 placeholder-transparent rounded-sm sm:min-w-[500px] md:h-[50px] lg:h-16 lg:rounded-tr-none lg:rounded-br-none lg:min-w-[440px] xl:min-w-[475px] 2xl:min-w-[500px]'
            type='email'
            name='email'
            placeholder='Email address'
            required
          />
          <label className='absolute px-2 left-0 top-0 text-[#8c8c8c] text-[0.8rem] transition-all font-semibold peer-placeholder-shown:text-[0.8rem] peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-[#8c8c8c] peer-focus:text-[0.625rem] peer-focus:font-semibold md:peer-placeholder-shown:text-[0.875rem] md:peer-focus:text-[0.725rem] md:peer-focus:top-[2.5px] lg:peer-focus:top-2 lg:peer-placeholder-shown:top-[20px]'>
            Email address
          </label>
        </div>

        <div>
          <button className='flex justify-center items-center px-3 py-2 bg-red-600 text-white transition-all rounded-sm md:px-4 lg:h-16 lg:min-w-[212px] lg:text-[1.625rem] lg:rounded-tl-none lg:rounded-bl-none active:scale-90'>
            Get Started
            <span className='px-2'>
              <IoChevronForwardOutline className='text-white' />
            </span>
          </button>
        </div>
      </form>
    </main>
  );
}
