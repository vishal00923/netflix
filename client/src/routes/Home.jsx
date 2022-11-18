import Header from '../components/Header';
import StoryTV from '../components/StoryTV';
import StoryWatch from '../components/StoryWatch';
import StoryDownload from '../components/StoryDownload';

export default function Home() {
  return (
    <>
      <Header />
      <StoryTV />
      <StoryDownload />
      <StoryWatch />
    </>
  );
}
