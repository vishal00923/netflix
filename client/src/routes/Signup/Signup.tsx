import { Tv } from '@/routes/Signup/Tv';
import { Faq } from '@/routes/Signup/Faq';
import { Watch } from '@/routes/Signup/Watch';
import { Header } from '@/routes/Signup/Header';
import { Footer } from '@/routes/Signup/Footer';
import { Download } from '@/routes/Signup/Download';
import { Children } from '@/routes/Signup/Children';

export function Signup() {
  return (
    <>
      <Header />
      <Tv />
      <Download />
      <Watch />
      <Children />
      <Faq />
      <Footer />
    </>
  );
}
