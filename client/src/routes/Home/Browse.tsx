import { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function Browse() {
  const [browseMenu, setBrowseMenu] = useState<boolean>(false);
  const isAboveGivenScreen = useMediaQuery('(min-width: 894px)');

  return (
    <>
      {isAboveGivenScreen ? (
        <div className='w-5/6'>
          <ul className='flex items-center space-x-5 text-[12px] text-white'>
            <li className='py-1 transition duration-300 ease-in-out hover:opacity-75'>
              <Link to='/'>Home</Link>
            </li>
            <li className='py-1 transition duration-300 ease-in-out hover:opacity-75'>
              <Link to='/tv'>TV Shows</Link>
            </li>
            <li className='py-1 transition duration-300 ease-in-out hover:opacity-75'>
              <Link to='/movies'>Movies</Link>
            </li>
            <li className='py-1 transition duration-300 ease-in-out hover:opacity-75'>
              <Link to='/latest'>New & Popular</Link>
            </li>
            <li className='py-1 transition duration-300 ease-in-out hover:opacity-75'>
              <Link to='/my-list'>My List</Link>
            </li>
            <li className='py-1 transition duration-300 ease-in-out hover:opacity-75'>
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
            <ul className='flex w-[250px] flex-col items-center border-t-2 border-white bg-[#000000e0] text-[12px] text-white'>
              <li className='py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/'>Home</Link>
              </li>
              <li className='py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/tv'>TV Shows</Link>
              </li>
              <li className='py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/movies'>Movies</Link>
              </li>
              <li className='py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/latest'>New & Popular</Link>
              </li>
              <li className='py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/my-list'>My List</Link>
              </li>
              <li className='py-4 hover:bg-[#3c3c3c36]'>
                <Link to='/original-audio'>Browse by Langauges</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
