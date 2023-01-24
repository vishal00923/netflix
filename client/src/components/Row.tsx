import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import Axios from '@/api/axios';
import { baseURL } from '@/utils/helper';

import { Spinner } from '@/components/Spinner';

type Props = {
  url: string;
  title: string;
};

export function Row({ title, url }: Props) {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const rowRef = useRef<HTMLDivElement>(null);

  const filterMovies = movies.filter(
    (movie: any) => movie?.backdrop_path !== null
  );

  const handleClick = (direction: string) => {
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

  if (loading) return <Spinner w='w-12' h='h-8' />;

  return (
    <div className='flex flex-col'>
      <h2 className='pl-6 pb-2 text-[12.5px] text-white'>{title}</h2>
      <div className='group relative'>
        <ChevronLeftIcon
          onClick={() => handleClick('left')}
          className={`absolute top-0 bottom-0 left-1 z-50 my-auto h-5 w-5 
          cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          color='white'
        />
        <div
          ref={rowRef}
          className='flex items-center space-x-1 overflow-x-scroll scrollbar-hide'
        >
          {filterMovies.map((movie: any) => (
            <img
              key={movie?.id}
              className='z-10 h-[138px] w-[138px] cursor-pointer rounded-[5px] object-contain'
              src={`${baseURL}/${movie?.backdrop_path}`}
              alt={movie?.name}
            />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick('right')}
          className='absolute top-0 bottom-0 right-1 z-50 my-auto h-5 w-5 
          cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
          color='white'
        />
      </div>
    </div>
  );
}
