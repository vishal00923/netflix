import { useState, useEffect } from 'react';
import {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
} from '../api/requests';
import { randomNumGenerator, baseURL } from '../utils/helper';

import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import Axios from '../api/axios';

import Nav from '../components/Nav';
import Row from '../components/Row';
import Loader from '../components/Loader';

export default function Home() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
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
      <div className='h-screen flex justify-center items-center'>
        <Loader w='w-20' h='h-16' />
      </div>
    );
  }

  return (
    <main className='w-full h-full flex flex-col'>
      <div className='absolute top-0 -z-[10]'>
        <img
          className='w-screen h-[60vh] object-cover object-center opacity-70'
          src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.name}
        />
      </div>
      <Nav />
      <div className='max-w-[345px] px-6 pt-6'>
        <h1 className='text-white text-[24px] font-[600] leading-8'>
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

      <div className='px-6 pt-[56px] flex flex-col items-center justify-center space-y-6'>
        <Row url={fetchTrending} title='Trending Movies' />
        <Row url={fetchTopRated} title='Top Rated' />
        <Row url={fetchActionMovies} title='Action Thrillers' />
        <Row url={fetchComedyMovies} title='Comedy Movies' />
        <Row url={fetchHorrorMovies} title='Horror Movies' />
        <Row url={fetchRomanceMovies} title='Romance Movies' />
      </div>
    </main>
  );
}
