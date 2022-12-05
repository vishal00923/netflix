import { fetchTrending } from '../api/requests';
import { useState, useEffect, Fragment } from 'react';
import { randomNumGenerator, baseURL } from '../utils/helper';

import Axios from '../api/axios';
import Logo from '../components/Logo';

import profile from '../assets/profile.png';
import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

  console.log(movie);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        const { data } = await Axios.get(fetchTrending);
        const { results } = data;

        if (mounted) {
          setMovies([...results]);
          setMovie(results[randomNumGenerator(results.length)]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className='w-full h-full flex flex-col'>
      <div className='absolute top-0 -z-[10]'>
        <img
          className='w-screen h-[90vh] object-cover object-center'
          src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
          alt={
            movie?.original_title ||
            movie?.title ||
            movie?.original_name ||
            movie?.name
          }
        />
      </div>
      <nav
        className='px-5 pt-2 w-full h-[65px]
      tablet:px-10 tablet:pt-5 tablet:h-[80px] laptop:px-9 desktop:px-12'
      >
        <div className='flex justify-between items-center space-x-6 pt-2'>
          <Logo />

          <div className='flex items-center pb-[12px] space-x-3 tablet:space-x-6 laptop:space-x-7 desktop:space-x-8'>
            <select
              className='bg-black text-white px-1 py-[2px]
             outline outline-gray-400 outline-1 rounded-sm text-[0.875rem] 
             font-normal tablet:py-[4.5px] tablet:text-[0.938rem] laptop:py-[5px] laptop:px-2 desktop:text-[1rem]'
              name='lang'
              defaultValue='English'
            >
              <option value='/in/' lang='en'>
                English
              </option>
              <option value='/in-hi/' lang='hi'>
                हिन्दी
              </option>
            </select>

            <img className='rounded-[4px]' src={profile} alt='Profile' />
          </div>
        </div>
      </nav>
      <div className='max-w-[345px] px-5 pt-6'>
        <h1 className='text-white text-[24px] font-[700] leading-8'>
          {movie?.original_title ||
            movie?.title ||
            movie?.original_name ||
            movie?.name}
        </h1>
        <p className='text-white text-[12px] pt-3'>{movie?.overview}</p>
        <div className='pt-2 flex items-center space-x-3'>
          <button className='bg-white px-[18px] py-1.5 flex justify-center items-center space-x-2 rounded-[3.5px] font-[600] transition-all hover:bg-[#ffffffc5]'>
            <PlayIcon className='w-6 h-6' />
            <span className='text-[14px]'>Play</span>
          </button>
          <button className='bg-[#6f6f7188] px-5 py-1.5 flex justify-center items-center space-x-2 rounded-[3.5px] font-[600] transition-all hover:bg-[#6f6f71d3]'>
            <InformationCircleIcon className='w-5 h-5' color='white' />
            <span className='text-white text-[14px]'>More Info</span>
          </button>
        </div>
      </div>

      {/* All content */}
      <div className='flex flex-col'>
        <h1 className='text-white'>Trending Now</h1>
        <div className='flex items-center space-x-3 overflow-x-scroll scrollbar-hide'>
          {movies.map((movie, idx) => (
            <Fragment key={idx}>
              <img
                className='w-[195px] h-auto'
                src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
                alt={
                  movie?.original_title ||
                  movie?.title ||
                  movie?.original_name ||
                  movie?.name
                }
              />
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
