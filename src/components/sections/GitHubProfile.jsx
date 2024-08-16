import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';

function GitHubProfile() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='flex flex-col items-center gap-6 p-3 w-full'>
      <div
        className={`text-7xl ${
          theme === 'light' ? 'text-blue-400' : 'text-blue-500'
        }`}
      >
        <FaGithub />
      </div>

      <p className='text-lg text-textColorMain text-center tracking-wide'>
        Below is my&nbsp;
        <strong
          className={theme === 'light' ? 'text-blue-400' : 'text-blue-500'}
        >
          GitHub&nbsp;Profile
        </strong>
        &nbsp;if you are interested to take a look at what projects i've done,
        what technologies i've used and what features does they have.
      </p>

      <a
        href='https://github.com/MariannDobre'
        target='_blank'
        rel='noopener noreferrer'
        className={`text-lg text-textColorMain tracking-wide no-underline border-none outline outline-1 outline-textColorMain py-1 px-6 rounded-md shadow-xl transition-all duration-300 ${
          theme === 'light'
            ? 'hover:text-blue-400 hover:outline-blue-400 focus-visible:text-blue-400 focus-visible:outline-blue-400'
            : 'hover:text-blue-500 hover:outline-blue-500 focus-visible:text-blue-500 focus-visible:outline-blue-500'
        }`}
      >
        Check it
      </a>
    </div>
  );
}

export default GitHubProfile;
