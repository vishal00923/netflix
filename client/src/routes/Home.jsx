import FAQ from '../components/FAQ';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryTV from '../components/StoryTV';
import StoryWatch from '../components/StoryWatch';
import StoryDownload from '../components/StoryDownload';
import StoryChildren from '../components/StoryChildren';

export default function Home() {
  return (
    <>
      <Header />
      <StoryTV />
      <StoryDownload />
      <StoryWatch />
      <StoryChildren />
      <FAQ />
      <Footer />
    </>
  );
}
