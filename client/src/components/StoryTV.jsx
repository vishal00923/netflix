import tv from '../assets/tv.png';

export default function StoryTV() {
  return (
    <section className='w-full h-full border-b-8 border-b-[#202020]'>
      <div className='max-w-[1224px] my-0 mx-auto py-10 laptop:flex laptop:justify-center laptop:items-center laptop:space-x-20 desktop:space-x-32'>
        <div className='flex flex-col items-center space-y-2.5 px-5 laptop:items-start'>
          <h2 className='text-white text-center text-[1.65rem] tablet:text-[2.5rem] laptop:text-[3.25rem] laptop:text-left desktop:max-w-[600px]'>
            Enjoy on your TV.
          </h2>
          <p className='text-white max-w-[455px] text-center text-[1.125rem] tablet:w-full tablet:font-semibold laptop:text-left laptop:max-w-[380px] laptop:text-[1.45rem] desktop:max-w-[490px] desktop:text-[1.5rem]'>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className='mt-0 pb-1'>
          <div className='relative max-w-[520px] my-0 mx-auto tablet:max-w-[580px] laptop:max-w-[410px] desktop:max-w-[520px]'>
            <img className='z-10' src={tv} alt='TV' />
            <div className='-z-10 max-w-[72.5%] absolute top-[20.8%] left-[13.5%]'>
              <video
                className='object-contain'
                type='video/mp4'
                loop
                muted
                autoPlay
                playsInline
              >
                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
