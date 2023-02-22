import React from 'react';

import Time from '../../../Base/Time';

function Header() {
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-xl sm:text-3xl text-font_secondary font-medium border-b pb-6">
        <span className="font-semibold text-font_primary">Hey 👋!</span> -- if
        you're looking for a full stack software engineer to help bring an idea
        to life and you're on a tight timeline--
        <span className="font-semibold text-font_primary">
          <a className="cursor-pointer hover:underline" href="/contact">
            let's jam!
          </a>
        </span>
      </h1>

      <ul className="flex flex-1 flex-col mt-6 mb-6 font-medium text-font_secondary text-base sm:text-xl leading-loose">
        <li className="flex-1">- I create things</li>
        <li className="flex-1">- I design things</li>
        <li className="flex-1">- I develop things</li>
        <li className="flex-1">- I break things</li>

        <li className="flex-1">
          - From UI/UX to Machine Learning to experimental HUDs and 3D stuff I
          like to explore everything.
        </li>
      </ul>

      <Time />
    </div>
  );
}

export default Header;
