import Nav from './Nav';
import Intro from './Intro';

export default function Header() {
  return (
    <header className='w-full bg-hero-pattern border-b-8 border-b-[#202020] bg-center bg-cover'>
      <div className='bg-black/40'>
        <Nav />
        <Intro />
      </div>
    </header>
  );
}
