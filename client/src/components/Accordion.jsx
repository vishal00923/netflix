import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { faqs } from '../data/faqs';

export default function Accordion() {
  const [toggle, setToggle] = useState('0');

  const handleToggle = (idx) => {
    if (toggle === idx) {
      return setToggle('0');
    }
    setToggle(idx);
  };

  return (
    <ul className='py-2.5 w-full flex flex-col items-center space-y-2'>
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          faq={faq}
          active={toggle === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </ul>
  );
}

function AccordionItem({ faq, active, onToggle }) {
  const { question, answer } = faq;

  return (
    <li className='bg-[#303030] w-[390px] tablet:w-[500px] laptop:w-[750px] desktop:w-[850px]'>
      <div
        onClick={onToggle}
        className='transition-all px-5 py-3.5 border-b-[1px] border-black flex justify-between items-center cursor-pointer tablet:px-6 tablet:py-3.5 laptop:px-7 laptop:py-4 desktop:px-8 desktop:py-4'
      >
        <p className='text-white text-[1.125rem] tablet:text-[1.25rem] laptop:text-[1.375rem] desktop:text-[1.563rem]'>
          {question}
        </p>
        {active ? (
          <XMarkIcon className='text-white w-7 h-6 tablet:w-9 tablet:h-8 laptop:w-10 laptop:h-9 desktop:w-11 desktop:h-10' />
        ) : (
          <PlusIcon className='text-white w-7 h-6 tablet:w-9 tablet:h-8 laptop:w-10 laptop:h-9 desktop:w-11 desktop:h-10' />
        )}
      </div>

      <div
        className={`${
          active
            ? `h-auto transition-all px-5 py-5 flex flex-col items-center tablet:px-6 tablet:py-[22px] laptop:px-7 laptop:py-6 desktop:px-8 desktop:py-[26px]`
            : 'hidden'
        }`}
      >
        <p className='text-white text-[1.125rem] tablet:text-[1.25rem] laptop:text-[1.375rem] desktop:text-[1.5rem]'>
          {answer.p1}
        </p>
        <p className='text-white pt-5 text-[1.125rem] tablet:text-[1.25rem] laptop:text-[1.375rem] desktop:text-[1.5rem]'>
          {answer.p2}
        </p>
      </div>
    </li>
  );
}
