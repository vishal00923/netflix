import { useState, useEffect } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
  fetchNetflixOriginals,
} from '@/api/requests';
import { baseURL, randomNumGenerator } from '@/utils/helper';

import Axios from '@/api/axios';
import user from '@/assets/user.png';

import { Row } from '@/components/Row';
import { Logo } from '@/components/Logo';
import { Menu } from '@/components/Menu';
import { Spinner } from '@/components/Spinner';

export function Main() {
  const [movie, setMovie] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await Axios.get(fetchTrending);
        const { results } = await data;

        if (mounted) {
          setTimeout(() => {
            setMovie(results[randomNumGenerator(results.length)]);
            setLoading(false);
          }, 1500);
        }
      } catch (error) {
        console.error('Something went wrong: ', error);
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <Spinner w='w-20' h='h-16' />
      </div>
    );
  }

  return (
    <main className='relative'>
      <div className='absolute top-0 left-0 -z-10'>
        <img
          className='h-[95vh] w-screen object-cover opacity-70'
          src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.name}
        />
      </div>

      <nav
        className='h-[65px] w-full px-6 pt-2 tablet:h-[80px] tablet:px-10
       tablet:pt-5 laptop:px-9 desktop:px-12'
      >
        <div className='flex items-center justify-between space-x-6 pt-2'>
          <div className='flex items-center justify-center space-x-1'>
            <Logo />
            <Menu />
          </div>

          <div
            className='flex items-center space-x-3 pb-[12px] tablet:space-x-6 
          laptop:space-x-7 desktop:space-x-8'
          >
            <select
              className='rounded-sm bg-black px-1 py-[2px]
             text-[0.875rem] font-normal text-white outline outline-1 
             outline-gray-400 tablet:py-[4.5px] tablet:text-[0.938rem] laptop:py-[5px] laptop:px-2 desktop:text-[1rem]'
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

            <img src={user} alt='User' />
          </div>
        </div>
      </nav>

      <div className='max-w-[345px] px-6 pt-6'>
        <h1 className='text-[24px] font-[600] leading-8 text-white'>
          {movie?.original_title ||
            movie?.title ||
            movie?.original_name ||
            movie?.name}
        </h1>
        <p className='pt-3 text-[12px] text-white'>{movie?.overview}</p>
        <div className='flex items-center space-x-3 pt-2'>
          <button
            className='flex items-center justify-center space-x-2 rounded-[3.5px] bg-white 
          px-[18px] py-1.5 font-[600] transition-all hover:bg-[#ffffffc5]'
          >
            <PlayIcon className='h-6 w-6' />
            <span className='text-[14px]'>Play</span>
          </button>
          <button
            className='flex items-center justify-center space-x-2 rounded-[3.5px] bg-[#6f6f7188] 
          px-5 py-1.5 font-[600] transition-all hover:bg-[#6f6f71d3]'
          >
            <InformationCircleIcon className='h-5 w-5' color='white' />
            <span className='text-[14px] text-white'>More Info</span>
          </button>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center space-y-6 px-6 pt-[56px]'>
        <Row url={fetchTrending} title='Trending Movies' />
        <Row url={fetchTopRated} title='Top Rated' />
        <Row url={fetchActionMovies} title='Action Thrillers' />
        <Row url={fetchComedyMovies} title='Comedy Movies' />
        <Row url={fetchHorrorMovies} title='Horror Movies' />
        <Row url={fetchRomanceMovies} title='Romance Movies' />
        <Row url={fetchNetflixOriginals} title='Netflix Originals' />
        <Row url={fetchDocumentaries} title='Documentries' />
      </div>
    </main>
  );
}
