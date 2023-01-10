import { Nav } from '@/routes/Signup/Nav';
import { Intro } from '@/routes/Signup/Intro';

export function Header() {
  return (
    <header className='w-full border-b-8 border-b-[#202020] bg-hero-pattern bg-cover bg-center'>
      <div className='bg-black/40'>
        <Nav />
        <Intro />
      </div>
    </header>
  );
}
