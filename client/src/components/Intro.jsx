import GetStarted from './GetStarted';

export default function Intro() {
  return (
    <main
      className='max-w-[920px] py-14 mx-auto px-6 tablet:py-[85px] 
    tablet:px-10 tablet:max-w-[620px] laptop:max-w-[800px] laptop:py-24 desktop:py-32'
    >
      <div className='py-8'>
        <h1
          className='text-white text-[1.68rem] text-center leading-[32px] 
        tablet:text-[2.8rem] tablet:leading-[48px] laptop:text-[3.75rem]
        laptop:leading-[60px] desktop:text-[4.125rem] desktop:leading-[70px]'
        >
          Unlimited movies, TV shows and more.
        </h1>
        <div className='w-full flex flex-col items-center'>
          <p
            className='text-white text-[1.2rem] mt-5 tablet:text-[1.35rem] 
          laptop:text-[1.5rem] desktop:text-[1.65rem]'
          >
            Watch anywhere. Cancel anytime.
          </p>
          <p
            className='max-w-[320px] mx-auto text-white text-center text-[1.1rem] 
          mt-4 leading-[25px] tablet:text-[1.2rem] tablet:max-w-[425px]
          laptop:max-w-[680px] laptop:mt-5'
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
