import { Accordion } from '@/routes/Signup/Accordion';
import { GetStarted } from '@/routes/Signup/GetStarted';

export function Faq() {
  return (
    <section className='h-full w-full border-b-8 border-b-[#202020]'>
      <div
        className='my-0 mx-auto max-w-[1224px] py-10 tablet:py-12 
      laptop:py-16 desktop:py-[72px]'
      >
        <div className='px-5 laptop:pl-24'>
          <h2
            className='text-center text-[1.5rem] leading-[1.12] text-white 
          tablet:text-[2.5rem] laptop:text-[3.25rem]'
          >
            Frequently Asked Questions
          </h2>

          <div className='mx-auto w-[75%] py-6 tablet:py-7 laptop:py-9 desktop:py-11'>
            <Accordion />
          </div>

          <div
            className='mx-auto max-w-[420px] pt-2 tablet:max-w-[520px] tablet:pt-3 
          laptop:max-w-[620px] laptop:pt-4 desktop:max-w-[720px] desktop:pt-5'
          >
            <p
              className='mx-auto mt-4 max-w-[320px] text-center text-[1.1rem] 
            leading-[25px] text-white tablet:max-w-[425px] tablet:text-[1.2rem]
            laptop:mt-5 laptop:max-w-[680px]'
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
}
