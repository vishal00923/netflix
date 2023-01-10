import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div>
      <button
        onMouseEnter={() => setIsShown(true)}
        className='bg-inherit px-4 py-2.5 text-sm text-white'
      >
        Browse
      </button>
      <ul
        onMouseLeave={() => setIsShown(false)}
        className={`${
          !isShown && 'hidden'
        } absolute top-[60px] left-0 z-20 flex flex-col 
        items-center justify-center space-y-4 border-[1px] border-[#8c8c8c] bg-black text-sm text-[#b4b4b4]
        transition duration-300 ease-linear`}
      >
        <li className='w-[275px]'>
          <Link
            className='block px-4 pt-4 pb-3 text-center hover:cursor-pointer hover:bg-[#1b1b1b]'
            to='/home'
          >
            Home
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link
            className='block px-4 py-3 text-center hover:cursor-pointer hover:bg-[#1b1b1b]'
            to=''
          >
            TV Shows
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link
            className='block px-4 py-3 text-center hover:cursor-pointer hover:bg-[#1b1b1b]'
            to=''
          >
            Movies
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link
            className='block px-4 py-3 text-center hover:cursor-pointer hover:bg-[#1b1b1b]'
            to=''
          >
            New & Popular
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link
            className='block px-4 pt-2.5 pb-4 text-center hover:cursor-pointer hover:bg-[#1b1b1b]'
            to=''
          >
            My List
          </Link>
        </li>
      </ul>
    </div>
  );
}
