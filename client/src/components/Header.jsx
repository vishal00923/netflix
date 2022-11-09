import Nav from './Nav';
import Main from './Main';

export default function Header() {
  return (
    <header
      className={`border-b-8 border-b-[#222222] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/c96f2a1d-1627-40aa-a29e-6ab6b27b35ab/IN-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center h-[60vh] sm:h-[82vh]`}
    >
      <div
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 60%, rgba(0,0,0,.8))',
        }}
        className='bg-black/40 w-full h-full'
      >
        <Nav />
        <Main />
      </div>
    </header>
  );
}
