import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useClickOutside } from '../hooks/useClickOutside';
import { ThemeContext } from '../context/ThemeContext';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import Tooltip from './tooltip/Tooltip';

const navLinks = [
  { id: 1, label: 'about', sectionId: 'about' },
  { id: 2, label: 'knowledge', sectionId: 'what-i-know' },
  { id: 3, label: 'course', sectionId: '' },
  { id: 4, label: 'projects', sectionId: '' },
  { id: 5, label: 'contact', sectionId: '' },
];

function PageNavigation() {
  const navRef = useRef(null);
  const [themeMenu, setThemeMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { containerRef: themeMenuRef } = useClickOutside(() =>
    setThemeMenu(false)
  );

  const navHeight = navRef?.current?.clientHeight || 0;
  const themeMenuStyles = {
    top: themeMenu ? `calc(${navHeight}px + 12px)` : '',
    right: 0,
  };
  const themeButtonsStyles = `flex items-center gap-2 w-full pl-3 py-1 ${
    theme === 'light' ? 'hover:bg-slate-300/35' : 'hover:bg-neutral-100/20'
  } transition-all duration-300`;

  const handleShowThemeMenu = (event) => {
    event.stopPropagation();
    setThemeMenu((action) => !action);
  };

  return (
    <nav
      ref={navRef}
      className='fixed top-[44px] right-[44px] z-[9999] bg-bgColorMain text-textColorMain flex items-center gap-6 backdrop-blur-md shadow-xl rounded-md p-3 outline outline-1 outline-bgColorContrast'
    >
      <ul className='flex items-center gap-3'>
        {navLinks.map(({ id, label, sectionId }) => (
          <li key={id}>
            <Link
              className='capitalize tracking-wide outline-0 border-none outline-none no-underline cursor-pointer hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300'
              to={sectionId}
              spy={true}
              smooth={true}
              duration={1500}
              delay={0}
              activeClass='active-link'
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Tooltip
        tooltipContent={`Turn the light ${theme === 'light' ? 'off' : 'on'}`}
        position='bottom-left'
      >
        <button
          className='text-lg outline-0 border-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300'
          onClick={handleShowThemeMenu}
          aria-label='Toggle menu for theme changing'
        >
          {theme === 'light' ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </Tooltip>

      <div
        ref={themeMenuRef}
        style={themeMenuStyles}
        className={`absolute z-50 flex flex-col items-start gap-2 w-28 bg-bgColorMain text-textColorMain backdrop-blur-md py-3 shadow-xl rounded-md ${
          themeMenu ? 'block' : 'hidden'
        } outline outline-1 outline-bgColorContrast`}
      >
        <button
          className={`${themeButtonsStyles}  ${
            theme === 'light' ? 'text-textColorSecondary' : ''
          }`}
          value='light'
          onClick={() => setTheme('light')}
        >
          <IoMdSunny />
          Light
        </button>

        <button
          className={`${themeButtonsStyles}  ${
            theme === 'dark' ? 'text-textColorSecondary' : ''
          }`}
          value='dark'
          onClick={() => setTheme('dark')}
        >
          <IoMdMoon />
          Dark
        </button>
      </div>
    </nav>
  );
}

export default PageNavigation;
