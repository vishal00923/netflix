import Accordian from './Accordian';

export default function FAQ() {
  return (
    <section className='w-full h-full border-b-8 border-b-[#202020]'>
      <div className='max-w-[1224px] my-0 mx-auto py-10 tablet:py-12'>
        <div className='flex flex-col items-center space-y-5 px-5 laptop:pl-24'>
          <h2 className='leading-[1.12] text-white text-center text-[1.5rem] tablet:text-[2.5rem] laptop:text-[3.25rem] laptop:text-left'>
            Frequently Asked Questions
          </h2>

          <div className='py-2 w-[75%]'>
            <Accordian />
          </div>
        </div>
      </div>
    </section>
  );
}
