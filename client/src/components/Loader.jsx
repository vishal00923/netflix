export default function Spinner() {
  return (
    <div className='flex items-center justify-center space-x-2'>
      <div
        className='spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full'
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
      <div
        className='spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0'
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
