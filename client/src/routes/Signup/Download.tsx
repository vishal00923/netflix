import series from '@/assets/series.png';
import download from '@/assets/download.jpg';

export function Download() {
  return (
    <section className='h-full w-full border-b-8 border-b-[#202020]'>
      <div
        className='my-0 mx-auto max-w-[1224px] py-10 tablet:py-12 
      laptop:flex laptop:flex-row-reverse laptop:items-center laptop:justify-between'
      >
        <div
          className='flex flex-col items-center space-y-5 px-5 
        laptop:items-start laptop:pl-24'
        >
          <h2
            className='text-center text-[1.65rem] leading-[1.12] text-white
           tablet:text-[2.5rem] laptop:text-left laptop:text-[3.25rem] desktop:max-w-[600px]'
          >
            Download your shows to watch offline.
          </h2>
          <p
            className='max-w-[455px] text-center text-[1rem] text-white
           tablet:w-full tablet:font-semibold laptop:max-w-[480px] laptop:text-left
            laptop:text-[1.45rem] desktop:max-w-[520px] desktop:text-[1.5rem]'
          >
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        <div className='py-1 tablet:py-2 laptop:py-3.5 desktop:py-4'>
          <div
            className='relative my-0 mx-auto max-w-[425px] tablet:max-w-[550px]
           laptop:w-[450px] desktop:max-w-[475px]'
          >
            <img src={download} alt='TV' />

            <div
              className='absolute bottom-[5%] left-[15%] h-[70px] w-[70%]
             rounded-xl border-2 border-[#595959] bg-black/90 tablet:bottom-[6%] tablet:h-[80px]
              laptop:h-[88px] desktop:bottom-[6.5%] desktop:h-[100px]'
            >
              <div className='flex items-center justify-between px-3 py-2 tablet:py-2.5 laptop:pt-3'>
                <div className='flex items-center space-x-4'>
                  <img
                    className='w-[35px] tablet:w-[45px] laptop:w-[48px] desktop:w-[55px]'
                    src={series}
                    alt='Stranger Things'
                  />
                  <div className='flex flex-col justify-center -space-y-0.5'>
                    <p
                      className='text-[0.92rem] font-semibold text-white
                     tablet:text-[0.95rem] laptop:text-[0.98rem] desktop:text-[1rem]'
                    >
                      Stranger Things
                    </p>
                    <span
                      className='text-[0.82rem] font-semibold
                     text-[#2020ff] tablet:text-[0.84rem] laptop:text-[0.9rem] desktop:text-[0.95rem]'
                    >
                      Downloading...
                    </span>
                  </div>
                </div>

                <div>
                  <img
                    className='h-auto w-[48px]'
                    src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
                    alt='Downloading...'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
