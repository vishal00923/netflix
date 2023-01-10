import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { faqs } from '@/data/faqs';
import { FaqsType } from '@/global/types';

export function Accordion() {
  const [toggle, setToggle] = useState<string>('0');

  const handleToggle = (index: any) => {
    if (toggle === index) {
      return setToggle('0');
    }
    setToggle(index);
  };

  return (
    <ul className='flex w-full flex-col items-center space-y-2 py-2.5'>
      {faqs.map((faq: FaqsType, index: any) => (
        <AccordionItem
          key={index}
          faq={faq}
          active={toggle === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
}

type Props = {
  faq: FaqsType;
  active: boolean;
  onToggle: () => void;
};

function AccordionItem({ faq, active, onToggle }: Props) {
  const { question, answer } = faq;

  return (
    <li
      className='w-[375px] bg-[#303030] mobile:w-[480px] tablet:w-[510px] 
    laptop:w-[750px] desktop:w-[850px]'
    >
      <div
        onClick={onToggle}
        className='flex cursor-pointer items-center justify-between border-b-[1px] 
        border-black px-5 py-3.5 transition-all tablet:px-6 
        tablet:py-3.5 laptop:px-7 laptop:py-4 desktop:px-8 desktop:py-4'
      >
        <p
          className='text-[1.125rem] text-white tablet:text-[1.25rem] 
        laptop:text-[1.375rem] desktop:text-[1.563rem]'
        >
          {question}
        </p>
        {active ? (
          <XMarkIcon
            className='h-6 w-7 text-white tablet:h-8 tablet:w-9 
          laptop:h-9 laptop:w-10 desktop:h-10 desktop:w-11'
          />
        ) : (
          <PlusIcon
            className='h-6 w-7 text-white tablet:h-8 tablet:w-9 
          laptop:h-9 laptop:w-10 desktop:h-10 desktop:w-11'
          />
        )}
      </div>

      <div
        className={`${
          active
            ? `max-h-[1200px] transition-all`
            : 'max-h-0 overflow-hidden transition-all'
        }`}
      >
        <p
          className='px-6 pt-5 text-[1.125rem] text-white tablet:px-6 
        tablet:text-[1.25rem] laptop:px-7 laptop:text-[1.375rem] desktop:px-9 desktop:text-[1.5rem]'
        >
          {answer.p1}
        </p>
        <br />
        <p
          className='px-6 pb-5 text-[1.125rem] text-white tablet:px-6 
        tablet:text-[1.25rem] laptop:px-7 laptop:text-[1.375rem] desktop:px-10 desktop:text-[1.5rem]'
        >
          {answer.p2}
        </p>
      </div>
    </li>
  );
}
