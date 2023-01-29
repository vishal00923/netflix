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
} from '@/api/requests';
import { baseURL, randomNumGenerator } from '@/utils/helper';

import Axios from '@/api/axios';

import { Row } from '@/components/Row';
import { Spinner } from '@/components/Spinner';

import { Nav } from '@/routes/Home/Nav';
import { Hero } from '@/routes/Home/Hero';

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
          className='h-[32vh] w-screen object-cover opacity-70'
          src={`${baseURL}/${movie.backdrop_path || movie.poster_path}`}
          alt={movie.name}
        />
      </div>
      <Nav />
      <Hero movie={movie} />

      <div className='flex flex-col -space-y-4 pl-4 pt-10'>
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
