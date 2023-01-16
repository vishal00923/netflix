import { useState, useEffect } from 'react';
import { PlayIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon, BellIcon } from '@heroicons/react/24/outline';

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
import { Menu } from '@/components/Menu';
import { Spinner } from '@/components/Spinner';

import { Logo } from '@/routes/Home/Logo';

export function Home() {
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
        className='h-[65px] w-full px-5 tablet:h-[80px] tablet:px-10
        laptop:px-9 desktop:px-12'
      >
        <div className='flex items-center justify-between space-x-6'>
          <div className='flex items-center justify-center space-x-6 pt-2'>
            <Logo />
            <Menu />
          </div>

          <div className='flex items-center space-x-5 pt-1'>
            <MagnifyingGlassIcon className='h-6 w-6' color='white' />
            <BellIcon className='h-6 w-6' color='white' />
            <img className='rounded-[3.5px]' src={user} alt='User' />
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
