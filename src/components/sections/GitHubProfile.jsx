import React from 'react';
import { FaGithub } from 'react-icons/fa';

function GitHubProfile() {
  return (
    <div className='flex flex-col items-center gap-6 p-3 w-full'>
      <div className='text-4xl text-textColorSecondary sm:text-5xl md:text-6xl lg:text-7xl'>
        <FaGithub />
      </div>

      <p className='text-sm text-textColorMain text-center tracking-wide sm:text-base md:text-lg'>
        Below is my&nbsp;
        <strong className='text-textColorSecondary'>GitHub&nbsp;Profile</strong>
        &nbsp;if you are interested to take a look at what projects i've done,
        what technologies i've used and what features does they have.
      </p>

      <a
        href='https://github.com/MariannDobre'
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm text-textColorMain tracking-wide no-underline border-none outline outline-1 outline-textColorMain py-1 px-6 rounded-md shadow-xl hover:text-textColorMainHover hover:outline-textColorMainHover focus-visible:text-textColorMainHover focus-visible:outline-textColorMainHover transition-all duration-300 sm:text-base md:text-lg'
      >
        Check it
      </a>
    </div>
  );
}

export default GitHubProfile;
