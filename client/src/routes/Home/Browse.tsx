import { useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

import { Link } from '@/components/Link';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function Browse() {
  const [browseMenu, setBrowseMenu] = useState<boolean>(false);
  const isAboveGivenScreen = useMediaQuery('(min-width: 894px)');

  return (
    <>
      {isAboveGivenScreen ? (
        <div className='w-5/6 login:pt-3'>
          <ul className='flex items-center space-x-5 text-[12px] text-white'>
            <li className='py-1'>
              <Link to='/'>Home</Link>
            </li>
            <li className='py-1'>
              <Link to='/tv'>TV Shows</Link>
            </li>
            <li className='py-1'>
              <Link to='/movies'>Movies</Link>
            </li>
            <li className='py-1'>
              <Link to='/latest'>New & Popular</Link>
            </li>
            <li className='py-1'>
              <Link to='/my-list'>My List</Link>
            </li>
            <li className='py-1'>
              <Link to='/original-audio'>Browse by Langauges</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className='relative'>
          <button
            onMouseOver={() => setBrowseMenu(true)}
            className='flex items-center space-x-0 bg-transparent text-[12.5px] font-semibold text-white'
          >
            <span>Browse</span>
            <RxTriangleDown className='h-5 w-5' color='white' />
          </button>

          <div
            onMouseLeave={() => setBrowseMenu(false)}
            className={`absolute top-14 -left-[90px] z-20 ${
              browseMenu ? 'visible' : 'hidden'
            }`}
          >
            <div className='absolute -top-4 left-[112px]'>
              <RxTriangleUp className='h-7 w-7' color='white' />
            </div>
            <ul className='flex w-[250px] flex-col items-center border-t-2 border-white bg-[#000000e0] text-center text-[12px] text-white'>
              <li className='w-full py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/'>Home</Link>
              </li>
              <li className='w-full py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/tv'>TV Shows</Link>
              </li>
              <li className='w-full py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/movies'>Movies</Link>
              </li>
              <li className='w-full py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/latest'>New & Popular</Link>
              </li>
              <li className='w-full py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/my-list'>My List</Link>
              </li>
              <li className='w-full py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/original-audio'>Browse by Langauges</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
