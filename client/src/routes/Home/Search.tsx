import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';

export function Search() {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <>
      <div className='relative z-50 mx-1 flex items-center'>
        <input
          className={`absolute -right-0.5 w-0 text-sm text-white outline-none transition-all placeholder:text-[#ded4d4ab] ${
            searchActive &&
            'w-[270px] border-[1px] border-white bg-black/70 px-10 py-1.5'
          }`}
          type='text'
          placeholder='Titles, people, genres'
        />
        <button
          onClick={() => setSearchActive((prev) => !prev)}
          className={`absolute z-10 ${
            searchActive ? 'right-[240px]' : 'right-0.5'
          }`}
        >
          <CgSearch fontSize={24} color='white' />
        </button>
      </div>
      {searchActive && (
        <div
          onClick={() => setSearchActive(false)}
          className='fixed inset-0 h-full w-full'
        />
      )}
    </>
  );
}
