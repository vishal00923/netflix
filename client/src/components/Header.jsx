import Nav from './Nav';

export default function Header() {
  return (
    <header className='w-full h-[55vh] bg-hero-pattern border-b-8 border-b-[#202020] bg-center bg-cover tablet:h-[75vh] laptop:h-[80vh]'>
      <div className='w-full h-full bg-black/40'>
        <Nav />
      </div>
    </header>
  );
}
