import { baseURL } from '../utils/helper';
import { useFetch } from '../hooks/useFetch';

import { useState, useEffect, Fragment } from 'react';

import Loader from './Loader';

export default function Row({ title, url }) {
  const [movies, setMovies] = useState(null);

  const data = useFetch(url);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <Fragment>
      {movies ? (
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
      ) : (
        <Loader />
      )}
    </Fragment>
  );
}
