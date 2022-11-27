import Footer from './Footer';
import Select from './Select';

export default function StoryFooter() {
  return (
    <footer className='w-full'>
      <div className='max-w-[1224px] mx-auto pl-8'>
        <div className='max-w-[390px] mx-auto text-[#8b8b8b] py-12 px-2 tablet:px-5 tablet:max-w-[520px] laptop:max-w-[720px] desktop:max-w-[920px]'>
          <Footer />
          <Select />
          <div className='py-5'>
            <p className='text-[0.844rem]'>Netflix India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
