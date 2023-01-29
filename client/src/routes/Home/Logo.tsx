import logo from '@/assets/logo.svg';

export function Logo() {
  return (
    <img
      className='h-auto w-[45px] tablet:w-[55px] login:w-[68px] laptop:w-[85px] desktop:w-[90px] xl:w-[93px] 2xl:w-[98px]'
      src={logo}
      alt='Logo'
    />
  );
}
