import { baseURL } from '../utils/helper';
import { useState, useEffect } from 'react';

import Axios from '../api/axios';

import Loader from './Loader';

export default function Row({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Loader w='w-12' h='h-8' />;
  }

  return (
    <div className='flex flex-col'>
      <h1 className='text-white text-[16.5px] pb-1'>{title}</h1>
      <div className='flex items-center space-x-2 overflow-x-scroll scrollbar-hide'>
        {movies.map((movie) => (
          <img
            key={movie?.id}
            className='w-[290px] h-[120px]'
            src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
            alt={movie?.name}
          />
        ))}
      </div>
    </div>
  );
}
