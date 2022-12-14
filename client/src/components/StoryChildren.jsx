import children from '../assets/children.png';

export default function StoryChildren() {
  return (
    <section className='w-full h-full border-b-8 border-b-[#202020]'>
      <div
        className='max-w-[1224px] my-0 mx-auto py-10 tablet:py-12 
      laptop:flex laptop:flex-row-reverse laptop:justify-between
      laptop:items-center'
      >
        <div
          className='flex flex-col items-center space-y-5 px-5 
        laptop:items-start laptop:pl-24'
        >
          <h2
            className='leading-[1.12] text-white text-center text-[1.5rem]
           tablet:text-[2.5rem] laptop:text-[3.25rem] laptop:text-left'
          >
            Create profiles for children.
          </h2>
          <p
            className='text-white max-w-[480px] text-center text-[1rem]
           tablet:w-full tablet:font-semibold laptop:text-left laptop:max-w-[480px]
            laptop:text-[1.45rem] desktop:max-w-[520px] desktop:text-[1.5rem]'
          >
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>

        <div className='py-3.5 tablet:py-2 laptop:py-3.5 desktop:py-4'>
          <div
            className='relative max-w-[425px] my-0 mx-auto tablet:max-w-[550px] 
          laptop:w-[450px] desktop:w-[492px]'
          >
            <img src={children} alt='children' />
          </div>
        </div>
      </div>
    </section>
  );
}
