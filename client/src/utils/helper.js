export const randomNumGenerator = (range) =>
  Math.floor(Math.random() * (range - 1));

export const truncate = (str, lim) =>
  str?.length > lim ? str.substr(0, lim) + '...' : str;

export const baseURL = 'https://image.tmdb.org/t/p/original';
