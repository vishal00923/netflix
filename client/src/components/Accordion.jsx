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
    <ul className='w-full flex flex-col items-center space-y-3'>
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
    <li className='bg-[#303030] w-[390px] tablet:w-[530px]'>
      <div
        onClick={onToggle}
        className='px-5 py-3.5 border-b-[1px] border-black flex justify-between items-center  cursor-pointer'
      >
        <p className='text-white text-[1.125rem] tablet:text-[1.25rem]'>
          {question}
        </p>
        {active ? (
          <XMarkIcon className='text-white w-7 h-6' />
        ) : (
          <PlusIcon className='text-white w-7 h-6' />
        )}
      </div>

      <div
        className={`transition-all ${
          active ? `px-5 py-5 flex flex-col items-center` : 'hidden'
        }`}
      >
        <p className='text-white text-[1.125rem]'>{answer.p1}</p>
        <p className='text-white pt-5 text-[1.125rem]'>{answer.p2}</p>
      </div>
    </li>
  );
}

// px-5 py-5 flex flex-col items-center
