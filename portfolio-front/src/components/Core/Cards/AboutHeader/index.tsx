import React from 'react';

function Header() {
  return (
    <div className='flex flex-col h-full p-6 sm:p-4'>

      <h1 className='text-xl sm:text-2xl text-font_primary font-medium border-b pb-4'>
        A little about me!
      </h1>

      <div className='flex flex-1 justify-start flex-col mt-2'>

        <div className='flex-1 mb-2'>
          <h3 className='text-sm font-semibold text-font_secondary mb-2'>
            WHERE I'M FROM
          </h3>
          <p className='text-base md:text-xl font-normal leading-6 flex-1'>
            I was born and raised in Bogotá, Colombia. I lived with my grandparents for many years
            of my childhood and after getting a job as a developer I left home.
          </p>
        </div>

        <div className='flex-1  mb-2'>
          <h3 className='text-sm font-semibold text-font_secondary flex-1  mb-2'>
            WHAT I USED TO DO
          </h3>
          <p className='text-base md:text-xl font-normal leading-6 flex-1'>
            I started working at a young age in factories, helping to order inventory for
            construction and electrical companies.
            After that I was working in university labs, then I started working with drones and 3d printers, 
            trying to create my own business in which I broke and ended up working with parking machines.
          </p>
        </div>

        <div className='flex-1 mb-2'>
          <h3 className='text-sm font-semibold text-font_secondary flex-1 mb-2'>
            WHERE I'M AT NOW
          </h3>
          <p className='text-base md:text-xl font-normal leading-6 flex-1'>
            Today, I live in Stockholm, Sweden (yeah big climate change). When I'm not working
            you can usually find me in dance classes, climbing, hiking or just chilling at home or 
            with my friends.
          </p>
        </div>

        <div className='flex-1 mb-2'>
          <h3 className='text-sm font-semibold text-font_secondary flex-1 mb-2'>
            WHAT I DO NOW
          </h3>
          <p className='text-base md:text-xl font-normal leading-6 flex-1'>
            I'm working as a software consultant, I'm specialized in mobile and web development but I can also
            work in backend projects. I also have my own startup called Routte working in Colombia and usually I 
            try to have some free time to work in freelances and personal projects to increase my knowledge.
          </p>
        </div>

        <div className='flex-1 mb-2'>
          <h3 className='text-sm font-semibold text-font_secondary flex-1 mb-2'>
            WHAT IS IMPORTANT TO ME
          </h3>
          <p className='text-base md:text-xl font-normal leading-6 flex-1'>
            Create amazing products that reach millions of users, providing quality, accessibility and confidence.
          </p>
        </div>

        <div>
          <ul className="nav-social z-10 gap-4">
            <li>
              <a href="mailto:vargasm.jp@gmail.com">
                <img src="svg/email.svg" alt="email icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="svg/cv.svg" alt="cv icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jpvargasdev">
                <img src="svg/twitter.svg" alt="twitter icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
