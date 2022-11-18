import series from '../assets/series.png';
import download from '../assets/download.jpg';

export default function StoryDownload() {
  return (
    <section className='w-full h-full border-b-8 border-b-[#202020]'>
      <div className='max-w-[1224px] my-0 mx-auto py-10 tablet:py-12 laptop:py-0 laptop:flex laptop:flex-row-reverse laptop:justify-between laptop:items-center'>
        <div className='flex flex-col items-center space-y-5 px-5 laptop:items-start laptop:pl-24'>
          <h2 className='leading-[1.12] text-white text-center text-[1.65rem] tablet:text-[2.5rem] laptop:text-[3.25rem] laptop:text-left desktop:max-w-[600px]'>
            Download your shows to watch offline.
          </h2>
          <p className='text-white max-w-[455px] text-center text-[1.125rem] tablet:w-full tablet:font-semibold laptop:text-left laptop:max-w-[480px] laptop:text-[1.45rem] desktop:max-w-[520px] desktop:text-[1.5rem]'>
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        <div className='py-1 tablet:py-2 laptop:py-3.5 desktop:py-4'>
          <div className='relative max-w-[425px] my-0 mx-auto tablet:max-w-[550px] laptop:w-[450px] desktop:max-w-[475px]'>
            <img src={download} alt='TV' />

            <div className='w-[70%] h-[70px] border-2 border-[#595959] bg-black/90 absolute bottom-[5%] left-[15%] rounded-xl tablet:h-[80px] tablet:bottom-[6%] laptop:h-[88px] desktop:h-[100px] desktop:bottom-[6.5%]'>
              <div className='px-3 py-2 flex justify-between items-center tablet:py-2.5 laptop:pt-3'>
                <div className='flex items-center space-x-4'>
                  <img
                    className='w-[35px] tablet:w-[45px] laptop:w-[48px] desktop:w-[55px]'
                    src={series}
                    alt='Stranger Things'
                  />
                  <div className='flex flex-col justify-center -space-y-0.5'>
                    <p className='text-white font-semibold text-[0.92rem] tablet:text-[0.95rem] laptop:text-[0.98rem] desktop:text-[1rem]'>
                      Stranger Things
                    </p>
                    <span className='text-[#2020ff] text-[0.82rem] font-semibold tablet:text-[0.84rem] laptop:text-[0.9rem] desktop:text-[0.95rem]'>
                      Downloading...
                    </span>
                  </div>
                </div>

                <div>
                  <img
                    className='w-[48px] h-auto'
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
