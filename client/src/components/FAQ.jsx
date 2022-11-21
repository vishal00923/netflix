import Accordion from './Accordion';
import GetStarted from './GetStarted';

export default function FAQ() {
  return (
    <section className='w-full h-full border-b-8 border-b-[#202020]'>
      <div className='max-w-[1224px] my-0 mx-auto py-10 tablet:py-12 laptop:py-16 desktop:py-[72px]'>
        <div className='px-5 laptop:pl-24'>
          <h2 className='text-center leading-[1.12] text-white text-[1.5rem] tablet:text-[2.5rem] laptop:text-[3.25rem]'>
            Frequently Asked Questions
          </h2>

          <div className='py-6 w-[75%] mx-auto tablet:py-7 laptop:py-9 desktop:py-11'>
            <Accordion />
          </div>

          <div className='pt-2 w-[420px] mx-auto tablet:pt-3 tablet:w-[520px]  laptop:pt-4 laptop:w-[620px] desktop:pt-5 desktop:w-[720px]'>
            <p className='max-w-[320px] mx-auto text-white text-center text-[1.1rem] mt-4 leading-[25px] tablet:text-[1.2rem] tablet:max-w-[425px] laptop:max-w-[680px] laptop:mt-5'>
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
