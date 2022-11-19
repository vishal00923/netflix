import imac from '../assets/imac.png';

export default function StoryWatch() {
  return (
    <section className='w-full h-full border-b-8 border-b-[#202020]'>
      <div className='max-w-[1224px] my-0 mx-auto py-10 laptop:flex laptop:justify-center laptop:items-center laptop:space-x-20 desktop:space-x-32'>
        <div className='flex flex-col items-center space-y-2.5 px-5 laptop:items-start'>
          <h2 className='text-white text-center text-[1.65rem] tablet:text-[2.5rem] laptop:text-[3.25rem] laptop:text-left desktop:max-w-[600px]'>
            Watch everywhere.
          </h2>
          <p className='text-white max-w-[455px] text-center text-[1rem] tablet:w-full tablet:font-semibold laptop:text-left laptop:max-w-[380px] laptop:text-[1.45rem] desktop:max-w-[500px] desktop:text-[1.5rem]'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className='mt-0 pb-1'>
          <div className='relative max-w-[420px] my-0 mx-auto tablet:max-w-[580px] laptop:max-w-[410px] desktop:max-w-[550px]'>
            <img className='z-10' src={imac} alt='imac' />
            <div className='-z-10 max-w-[64%] absolute top-[10.5%] left-[18%]'>
              <video
                className='object-contain'
                type='video/mp4'
                loop
                muted
                autoPlay
                playsInline
              >
                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
