import { baseURL } from '../utils/helper';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import Axios from '../api/axios';

import Loader from './Loader';

export default function Row({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMoved, setIsMoved] = useState(false);

  const rowRef = useRef(null);

  console.log(rowRef);

  const filterMovies = movies.filter((movie) => movie?.backdrop_path !== null);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
      <div className='relative group'>
        <ChevronLeftIcon
          onClick={() => handleClick('left')}
          className={`z-20 absolute top-0 bottom-0 left-2 my-auto w-8 h-8 transition opacity-0 hover:scale-125 group-hover:opacity-100 cursor-pointer ${
            !isMoved && 'hidden'
          }`}
          color='white'
        />
        <div
          ref={rowRef}
          className='flex items-center space-x-1.5 overflow-x-scroll scrollbar-hide'
        >
          {filterMovies.map((movie) => (
            <img
              key={movie?.id}
              className='z-10 h-[115px] object-contain cursor-pointer rounded-[5px]'
              src={`${baseURL}/${movie?.backdrop_path}`}
              alt={movie?.name}
            />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick('right')}
          className='z-20 absolute top-0 bottom-0 right-2 my-auto w-8 h-8 transition opacity-0 hover:scale-125 group-hover:opacity-100 cursor-pointer'
          color='white'
        />
      </div>
    </div>
  );
}
