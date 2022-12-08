import { baseURL } from '../utils/helper';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import Axios from '../api/axios';

import Loader from './Loader';

export default function Row({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterMovies = movies.filter((movie) => movie?.backdrop_path !== null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const { data } = await Axios.get(url);
        const { results } = await data;

        if (mounted) {
          setTimeout(() => {
            setMovies([...results]);
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error('Something went wrong: ', error);
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (loading) return <Loader w='w-12' h='h-8' />;

  return (
    <div className='flex flex-col'>
      <h1 className='text-white text-[20px] pb-2'>{title}</h1>
      <div className='relative'>
        <ChevronLeftIcon
          className='absolute top-10 left-2 w-8 h-8 m-auto'
          color='white'
        />
        <div className='flex items-center space-x-2 overflow-x-scroll scrollbar-hide'>
          {filterMovies.map((movie) => (
            <img
              key={movie?.id}
              className='h-[125px] object-contain cursor-pointer rounded-[5px]'
              src={`${baseURL}/${movie?.backdrop_path}`}
              alt={movie?.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
