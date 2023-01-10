import logo from '@/assets/logo.svg';

export function Logo() {
  return (
    <img
      className='h-[auto] w-[110px] tablet:w-[125px] laptop:w-[150px] desktop:w-[180px]'
      src={logo}
      alt='Logo'
    />
  );
}
