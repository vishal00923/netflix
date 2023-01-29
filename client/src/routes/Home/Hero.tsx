import { BsPlayFill } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';

import { truncate } from '@/utils/helper';

type Props = {
  movie: any;
};

export function Hero({ movie }: Props) {
  return (
    <div className='max-w-[345px] px-4 pt-12 tablet:px-8'>
      <h1 className='text-xl font-semibold leading-8 text-white'>
        {movie.name ||
          movie.title ||
          movie.original_name ||
          movie.original_title}
      </h1>
      <p className='w-[158px] pt-2 text-[12px] text-white'>
        {truncate(movie.overview, 118)}
      </p>
      <div className='mt-2.5 flex items-center space-x-1.5'>
        <button className='flex items-center justify-center space-x-2 rounded-[4px] bg-white px-2 py-0.5 font-semibold transition-all hover:bg-[#ffffffc5]'>
          <BsPlayFill fontSize={20} />
          <span className='text-[6px]'>Play</span>
        </button>
        <button
          className='flex items-center justify-center space-x-2 rounded-[4px] bg-[#6f6f7188] 
          px-2 py-[3px] font-semibold transition-all hover:bg-[#6f6f71d3]'
        >
          <HiOutlineInformationCircle fontSize={15} color='white' />
          <span className='text-[6px] text-white'>More Info</span>
        </button>
      </div>
    </div>
  );
}
