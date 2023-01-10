export function Select() {
  return (
    <div className='py-1'>
      <select
        className='h-12 w-[116px] rounded-sm bg-black px-2 py-2
             text-[1rem] font-normal text-[#b1aeaee5] outline outline-1 
             outline-[#494949]'
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
