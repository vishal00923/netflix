import Nav from './Nav';
import Intro from './Intro';

export default function Header() {
  return (
    <header className='w-full h-[50%] bg-hero-pattern border-b-8 border-b-[#202020] bg-center bg-cover tablet:h-[75vh] laptop:h-[80vh]'>
      <div className='w-full h-full bg-black/40'>
        <Nav />
        <Intro />
      </div>
    </header>
  );
}
