/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='max-w-[1224px] mx-auto pl-8'>
        <div className='max-w-[390px] mx-auto text-[#8b8b8b] py-12 px-2 tablet:px-5 tablet:max-w-[520px] laptop:max-w-[720px] desktop:max-w-[920px]'>
          <p className='text-[0.875rem]'>
            Questions? Call{' '}
            <a className='hover:underline' href='tel:000-800-040-1843'>
              000-800-040-1843
            </a>
          </p>

          <div className='py-8 max-w-[390px] tablet:max-w-[480px] laptop:max-w-[620px]'>
            <ul className='text-[0.813rem] grid grid-cols-2 gap-x-8 gap-y-3 tablet:grid-cols-3 tablet:gap-x-24 laptop:grid-cols-4 laptop:gap-x-52 desktop:gap-x-60'>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://help.netflix.com/support/412'
                >
                  <span>FAQ</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a className='hover:underline' href='https://help.netflix.com'>
                  <span>Help Centre</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a className='hover:underline' href='/youraccount'>
                  <span>Account</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://media.netflix.com/'
                >
                  <span>Media Centre</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a className='hover:underline' href='http://ir.netflix.com/'>
                  <span id='' data-uia='data-uia-footer-label'>
                    Investor Relations
                  </span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://jobs.netflix.com/jobs'
                >
                  <span>Jobs</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a className='hover:underline' href='/watch'>
                  <span>Ways to Watch</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://help.netflix.com/legal/termsofuse'
                >
                  <span>Terms of Use</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://help.netflix.com/legal/privacy'
                >
                  <span>Privacy</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a className='hover:underline' href='#'>
                  <span>Cookie Preferences</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://help.netflix.com/legal/corpinfo'
                >
                  <span>Corporate Information</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://help.netflix.com/contactus'
                >
                  <span id='' data-uia='data-uia-footer-label'>
                    Contact Us
                  </span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a className='hover:underline' href='https://fast.com'>
                  <span>Speed Test</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://help.netflix.com/legal/notices'
                >
                  <span>Legal Notices</span>
                </a>
              </li>
              <li className='w-[145px]'>
                <a
                  className='hover:underline'
                  href='https://www.netflix.com/in/browse/genre/839338'
                >
                  <span>Only on Netflix</span>
                </a>
              </li>
            </ul>
          </div>

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

          <div className='py-5'>
            <p className='text-[0.844rem]'>Netflix India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
