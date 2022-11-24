export default function Select() {
  return (
    <div className='py-1'>
      <select
        className='w-[116px] h-12 bg-black text-[#b1aeaee5] px-2 py-2
             outline outline-[#494949] outline-1 rounded-sm text-[1rem] 
             font-normal'
        name='lang'
        defaultValue='English'
      >
        <option value='/in/' lang='en'>
          English
        </option>
        <option value='/in-hi/' lang='hi'>
          हिन्दी
        </option>
      </select>
    </div>
  );
}
