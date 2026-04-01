'use client';

import { ButtonWithIcon } from './ui/buttonWithIcon';
import { HomeIcon } from 'lucide-react';
import { InfoIcon } from 'lucide-react';
import { LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header
      className={' sticky top-0 z-50 w-full border-b px-4 md:px-6 '}
    >
      <div className="grid grid-cols-3 px-30 items-center  h-15">

        <div></div>


        <div>
          <h1 className="text-3xl text-center"> Good <span className='text-primary'> First </span> Issue </h1>
        </div>

        <div className='flex gap-x-10 justify-self-end content-center'>
          <ButtonWithIcon icon={<HomeIcon />} children={"Home"} path={"/"} />
          <ButtonWithIcon icon={<LogIn />} children={"Sign up"} path={"/about"} />
          <ButtonWithIcon icon={<InfoIcon />} children={"About"} path={"/about"} />
        </div>
      </div>
    </header>
  );
}
;
