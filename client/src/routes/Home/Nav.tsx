import { Logo } from '@/routes/Home/Logo';
import { Browse } from '@/routes/Home/Browse';
import { Search } from '@/routes/Home/Search';

import user from '@/assets/user.png';
import { FaRegBell } from 'react-icons/fa';

import { useScrollY } from '@/hooks/useScrollY';

export function Nav() {
  const isScrolledY = useScrollY();

  return (
    <nav
      className={`fixed z-20 h-[41.333px] w-full transition-all duration-500 min-[894px]:h-[46px] laptop:h-[68px] desktop:h-[72px] ${
        isScrolledY
          ? 'bg-black'
          : 'h-auto bg-[#2b27271c] bg-gradient-to-b from-black/70'
      } px-5 tablet:px-8
        laptop:px-8 laptop:py-2 desktop:px-10`}
    >
      <div className='flex justify-between space-x-6'>
        <div className='flex w-full items-center space-x-6 py-2.5'>
          <Logo />
          <Browse />
        </div>

        <div className='flex items-center space-x-4 px-8'>
          <Search />
          <div className='mx-1'>
            <FaRegBell fontSize={21} color='white' />
          </div>
          <img className='rounded-[4.5px] px-[1px]' src={user} alt='user' />
        </div>
      </div>
    </nav>
  );
}
