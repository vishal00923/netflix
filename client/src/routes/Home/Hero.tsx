import { BsPlayFill } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';

type Props = {
  movie: any;
};

export function Hero({ movie }: Props) {
  return (
    <div className='max-w-[345px] px-6 pt-10 tablet:px-8'>
      <h1 className='text-[24px] font-[600] leading-8 text-white'>
        {movie?.original_title ||
          movie?.title ||
          movie?.original_name ||
          movie?.name}
      </h1>
      <p className='pt-3 text-[12px] text-white'>{movie?.overview}</p>
      <div className='mt-3 flex items-center space-x-1.5'>
        <button className='flex items-center justify-center space-x-2 rounded-[3.5px] bg-white px-3 py-1 font-semibold transition-all hover:bg-[#ffffffc5]'>
          <BsPlayFill className='h-5 w-5' />
          <span className='text-[12px]'>Play</span>
        </button>
        <button
          className='flex items-center justify-center space-x-2 rounded-[3.5px] bg-[#6f6f7188] 
          px-3 py-1 font-semibold transition-all hover:bg-[#6f6f71d3]'
        >
          <HiOutlineInformationCircle className='h-5 w-5' color='white' />
          <span className='text-[12px] text-white'>More Info</span>
        </button>
      </div>
    </div>
  );
}
