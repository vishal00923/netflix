import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setIsShown(true)}
        className='text-white text-sm bg-inherit px-4 py-2.5'
      >
        Browse
      </button>
      <ul
        onMouseLeave={() => setIsShown(false)}
        className={`${
          !isShown && 'hidden'
        } z-20 bg-black text-[#b4b4b4] text-sm border-[1px] border-[#8c8c8c] 
        absolute top-[60px] left-0 flex flex-col justify-center items-center space-y-4
        transition duration-300 ease-linear`}
      >
        <li className='w-[275px]'>
          <Link
            to='/home'
            className='block text-center px-4 pt-4 pb-3 hover:cursor-pointer hover:bg-[#1b1b1b]'
          >
            Home
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link className='block text-center px-4 py-3 hover:cursor-pointer hover:bg-[#1b1b1b]'>
            TV Shows
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link className='block text-center px-4 py-3 hover:cursor-pointer hover:bg-[#1b1b1b]'>
            Movies
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link className='block text-center px-4 py-3 hover:cursor-pointer hover:bg-[#1b1b1b]'>
            New & Popular
          </Link>
        </li>
        <li className='w-[275px]'>
          <Link className='block text-center px-4 pt-2.5 pb-4 hover:cursor-pointer hover:bg-[#1b1b1b]'>
            My List
          </Link>
        </li>
      </ul>
    </div>
  );
}
