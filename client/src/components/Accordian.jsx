import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { faqs } from '../data/faqs';

export default function Accordian() {
  return (
    <ul className='w-full flex flex-col items-center space-y-3'>
      {faqs.map((faq, idx) => (
        <AccordianItem key={idx} faq={faq} />
      ))}
    </ul>
  );
}

function AccordianItem({ faq }) {
  const { question, answer } = faq;

  return (
    <li
      className={`bg-[#303030] w-[480px] cursor-pointer transition-all tablet:w-[535px]`}
    >
      <div className='px-5 py-3.5 border-b-[1px] border-black flex justify-between items-center'>
        <p className='text-white text-[1.125rem] tablet:text-[1.25rem]'>
          {question}
        </p>
        <PlusIcon className='w-7 h-6 text-white' />
      </div>

      <div className='max-w-[520px] px-[24px] py-5 flex flex-col items-center'>
        <p className='text-white text-[1.125rem]'>{answer.p1}</p>
        <p className='text-white pt-5 text-[1.125rem]'>{answer.p2}</p>
      </div>
    </li>
  );
}
