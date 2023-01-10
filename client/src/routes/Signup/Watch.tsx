import imac from '@/assets/imac.png';

export function Watch() {
  return (
    <section className='h-full w-full border-b-8 border-b-[#202020]'>
      <div className='my-0 mx-auto max-w-[1224px] py-10 laptop:flex laptop:items-center laptop:justify-center laptop:space-x-20 desktop:space-x-32'>
        <div className='flex flex-col items-center space-y-2.5 px-5 laptop:items-start'>
          <h2 className='text-center text-[1.65rem] text-white tablet:text-[2.5rem] laptop:text-left laptop:text-[3.25rem] desktop:max-w-[600px]'>
            Watch everywhere.
          </h2>
          <p className='max-w-[455px] text-center text-[1rem] text-white tablet:w-full tablet:font-semibold laptop:max-w-[380px] laptop:text-left laptop:text-[1.45rem] desktop:max-w-[500px] desktop:text-[1.5rem]'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className='mt-0 pb-1'>
          <div className='relative my-0 mx-auto max-w-[420px] tablet:max-w-[580px] laptop:max-w-[410px] desktop:max-w-[550px]'>
            <img className='z-10' src={imac} alt='iMac' />
            <div className='absolute top-[10.5%] left-[18%] -z-10 max-w-[64%]'>
              <video className='object-contain' loop muted autoPlay playsInline>
                <source
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
