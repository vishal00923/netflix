export const randomNumGenerator = (range: number): number =>
  Math.floor(Math.random() * (range - 1));

export const truncate = (str: string, lim: number): string =>
  str?.length > lim ? str.substring(0, lim) + '...' : str;

export const baseURL = 'https://image.tmdb.org/t/p/original';
