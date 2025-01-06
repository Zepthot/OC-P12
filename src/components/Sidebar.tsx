// import libraries
import React from 'react';
// import components
import SideButton from './SideButton';
// import assets
import activity from '@/assets/icons/activity.svg';
import swimming from '@/assets/icons/swimming.svg';
import cycling from '@/assets/icons/cycling.svg';
import weightlifting from '@/assets/icons/weightlifting.svg';

export default function Sidebar() {
  return (
    <aside className="bg-black text-white flex flex-col items-center justify-center max-w-28">
      <ul className="flex flex-col space-y-8 px-7">
        <li>
          <SideButton src={activity} alt="activity" />
        </li>
        <li>
          <SideButton src={swimming} alt="swimming" />
        </li>
        <li>
          <SideButton src={cycling} alt="cycling" />
        </li>
        <li>
          <SideButton src={weightlifting} alt="weightlifting" />
        </li>
      </ul>
      <p className="absolute w-max bottom-24 -rotate-90 text-xs font-medium">
        Copyright SportSee 2020
      </p>
    </aside>
  );
}
