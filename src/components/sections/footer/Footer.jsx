import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Tooltip from '../../tooltip/Tooltip';

const linksStyles =
  'outline-none border-none cursor-pointer text-textColorMain text-2xl hover:text-textColorMainHover focus-visible:text-textColorMainHover no-underline block transition-all duration-300';

function Footer() {
  return (
    <div className='flex items-center justify-center gap-12 pt-8 mt-12 border-t-[1px] border-bgColorContrast'>
      <Tooltip
        tooltipContent='LinkedIn Profile'
        position='top-left'
      >
        <a
          className={linksStyles}
          href='https://www.linkedin.com/in/marian-dobre-/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
      </Tooltip>

      <Tooltip tooltipContent='GitHub Profile'>
        <a
          className={linksStyles}
          href='https://github.com/MariannDobre'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </Tooltip>

      <Tooltip
        tooltipContent='mariandobre002@gmail.com'
        position='top-right'
      >
        <button className={linksStyles}>
          <GrMail />
        </button>
      </Tooltip>
    </div>
  );
}

export default Footer;
