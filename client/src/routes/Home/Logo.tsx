import logo from '@/assets/logo.svg';

export function Logo() {
  return (
    <img
      className='h-auto w-[45px] tablet:w-[55px] login:w-[95px] login:pt-4 laptop:w-[150px] desktop:w-[180px]'
      src={logo}
      alt='Logo'
    />
  );
}
