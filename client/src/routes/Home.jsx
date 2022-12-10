import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
  fetchNetflixOriginals,
} from '../api/requests';
import { baseURL, randomNumGenerator } from '../utils/helper';

import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import Axios from '../api/axios';
import user from '../assets/user.png';

import Row from '../components/Row';
import Logo from '../components/Logo';
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
    <main className='relative'>
      <div className='absolute top-0 left-0 -z-10'>
        <img
          className='w-screen h-[95vh] object-cover opacity-70'
          src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.name}
        />
      </div>

      <nav className='px-6 pt-2 w-full h-[65px] tablet:px-10 tablet:pt-5 tablet:h-[80px] laptop:px-9 desktop:px-12'>
        <div className='flex justify-between items-center space-x-6 pt-2'>
          <div className='flex justify-center items-center space-x-1'>
            <Logo />
            <div>
              <button className='text-white text-sm px-4 py-2.5 transition duration-200 ease-in-out'>
                Browse
              </button>
              <ul className='z-20 bg-black text-[#b4b4b4] text-sm border-[1px] border-[#8c8c8c] absolute top-[58px] left-0 flex flex-col justify-center items-center space-y-4'>
                <li className='w-[275px]'>
                  <Link className='block text-center px-4 pt-4 pb-3 hover:cursor-pointer hover:bg-[#1b1b1b]'>
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
          </div>

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

            <img src={user} alt='User' />
          </div>
        </div>
      </nav>

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
        <Row url={fetchNetflixOriginals} title='Netflix Originals' />
        <Row url={fetchDocumentaries} title='Documentries' />
      </div>
    </main>
  );
}
