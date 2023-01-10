import { Select } from '@/components/Select';
import { Footer as FooterComponent } from '@/components/Footer';

export function Footer() {
  return (
    <footer className='w-full'>
      <div className='mx-auto max-w-[1224px] pl-8'>
        <div className='mx-auto max-w-[390px] px-2 pt-12 pb-3.5 text-[#8b8b8b] tablet:max-w-[520px] tablet:px-5 laptop:max-w-[720px] desktop:max-w-[920px]'>
          <FooterComponent />
          <Select />
          <div className='py-5'>
            <p className='text-[0.844rem]'>Netflix India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
