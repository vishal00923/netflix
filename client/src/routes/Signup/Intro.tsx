import { GetStarted } from '@/routes/Signup/GetStarted';

export function Intro() {
  return (
    <main
      className='mx-auto max-w-[920px] py-14 px-6 tablet:max-w-[620px] 
    tablet:py-[85px] tablet:px-10 laptop:max-w-[800px] laptop:py-24 desktop:py-32'
    >
      <div className='py-8'>
        <h1
          className='text-center text-[1.68rem] leading-[32px] text-white 
        tablet:text-[2.8rem] tablet:leading-[48px] laptop:text-[3.75rem]
        laptop:leading-[60px] desktop:text-[4.125rem] desktop:leading-[70px]'
        >
          Unlimited movies, TV shows and more.
        </h1>
        <div className='flex w-full flex-col items-center'>
          <p
            className='mt-5 text-[1.2rem] text-white tablet:text-[1.35rem] 
          laptop:text-[1.5rem] desktop:text-[1.65rem]'
          >
            Watch anywhere. Cancel anytime.
          </p>
          <p
            className='mx-auto mt-4 max-w-[320px] text-center text-[1.1rem] 
          leading-[25px] text-white tablet:max-w-[425px] tablet:text-[1.2rem]
          laptop:mt-5 laptop:max-w-[680px]'
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <GetStarted />
      </div>
    </main>
  );
}
