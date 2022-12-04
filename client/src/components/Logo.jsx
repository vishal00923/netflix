import logo from '../assets/logo.svg';

export default function Logo() {
  return (
    <img
      className='w-[90px] h-[auto] tablet:w-[125px] 
          laptop:w-[150px] desktop:w-[180px]'
      src={logo}
      alt='Netflix'
    />
  );
}
