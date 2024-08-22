import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useClickOutside } from '../hooks/useClickOutside';
import { ThemeContext } from '../context/ThemeContext';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import Tooltip from './tooltip/Tooltip';

const navLinks = [
  { id: 1, label: 'about', sectionId: 'about' },
  { id: 2, label: 'knowledge', sectionId: 'what-i-know' },
  { id: 3, label: 'course', sectionId: 'course' },
  { id: 4, label: 'projects', sectionId: 'my-projects' },
  { id: 5, label: 'contact', sectionId: 'contact-me' },
];

function PageNavigation() {
  const navRef = useRef(null);
  const [expandNav, setExpandNav] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  // outside click call for the nav list on mobile
  const { containerRef: navRefOnMobile } = useClickOutside(() => {
    if (window.innerWidth < 640) {
      setExpandNav(false);
      setThemeMenu(false);
    }
  });
  // outside click call for the light/dark theme menu
  const { containerRef: themeMenuRef } = useClickOutside(() =>
    setThemeMenu(false)
  );

  const navHeight = navRef?.current?.clientHeight || 0;
  const themeMenuStyles = {
    top: themeMenu ? `calc(${navHeight}px + 12px)` : '',
    right: 0,
  };
  const themeButtonsStyles = `flex items-center gap-2 text-xs w-full pl-3 py-1 ${
    theme === 'light' ? 'hover:bg-slate-950/20' : 'hover:bg-neutral-100/20'
  } transition-all duration-300 sm:text-sm md:text-base`;

  const handleShowThemeMenu = (event) => {
    event.stopPropagation();
    setThemeMenu((action) => !action);
  };

  const handleShowNavOnMobile = (event) => {
    event.stopPropagation();
    setExpandNav((action) => !action);
  };

  return (
    <nav
      ref={navRef}
      className='fixed flex flex-col items-center gap-2 top-[44px] right-[44px] z-[9999] bg-bgColorMain text-textColorMain backdrop-blur-md shadow-xl rounded-md p-2 outline outline-1 outline-bgColorContrast sm:flex-row sm:items-center sm:gap-2 md:gap-6 md:p-3'
    >
      <button
        className='text-sm relative outline-0 border-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300 block sm:hidden sm:text-base md:text-lg'
        onClick={handleShowNavOnMobile}
      >
        <HiOutlineMenuAlt2 />
      </button>

      <ul
        ref={navRefOnMobile}
        style={{ top: 'calc(100% + 12px)' }}
        className={`flex-col absolute right-0 gap-1 p-2 w-24 items-center z-50 bg-bgColorMain rounded-md shadow-xl outline outline-1 outline-bgColorContrast ${
          expandNav ? 'flex' : 'hidden'
        } sm:flex sm:w-auto sm:p-0 sm:flex-row sm:gap-2 sm:static sm:top-auto sm:right-auto sm:items-center sm:outline-none md:gap-3`}
      >
        {navLinks.map(({ id, label, sectionId }) => (
          <li key={id}>
            <Link
              className='text-xs capitalize tracking-wide outline-0 border-none outline-none no-underline cursor-pointer hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300 sm:text-sm md:text-base'
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
          className='text-sm outline-0 border-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300 sm:text-base md:text-lg'
          onClick={handleShowThemeMenu}
          aria-label='Toggle menu for theme changing'
        >
          {theme === 'light' ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </Tooltip>

      <div
        ref={themeMenuRef}
        style={themeMenuStyles}
        className={`absolute z-50 flex flex-col items-start gap-1 w-24 bg-bgColorMain text-textColorMain backdrop-blur-md py-2 shadow-xl rounded-md ${
          themeMenu ? 'block' : 'hidden'
        } outline outline-1 outline-bgColorContrast sm:gap-2 sm:w-28 md:py-3`}
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
