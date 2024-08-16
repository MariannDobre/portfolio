import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';

// cards data
const cardData = [
  {
    id: 1,
    cardImage: <FaHtml5 />,
    abbr: 'Knowledge about HTML.',
    cardTitle: 'HTML',
    cardDescription:
      'In the 2 years since I started to deepen my knowledge about this field, I have become able to build advanced markups according to the requirements.',

    cardColorLight: 'text-orange-900',
    outlineColorLight: 'outline-orange-900',
    shadowColorLight: 'shadow-orange-900/35',

    cardColorDark: 'text-orange-700',
    outlineColorDark: 'outline-orange-700',
    shadowColorDark: 'shadow-orange-700/35',
  },
  {
    id: 2,
    cardImage: <FaCss3Alt />,
    abbr: 'Knowledge about CSS.',
    cardTitle: 'CSS',
    cardDescription:
      'Over the past two years, I`ve built a solid foundation in CSS, enabling me to create responsive designs and effectively manage states like disabled, active, and hover.',

    cardColorLight: 'text-blue-900',
    outlineColorLight: 'outline-blue-900',
    shadowColorLight: 'shadow-blue-900/35',

    cardColorDark: 'text-blue-600',
    outlineColorDark: 'outline-blue-600',
    shadowColorDark: 'shadow-blue-600/35',
  },
  {
    id: 3,
    cardImage: <SiJavascript />,
    abbr: 'Knowledge about JavaScript.',
    cardTitle: 'JavaScript',
    cardDescription:
      'JavaScript has been the backbone of my journey in learning React, helping me manipulate and render dynamic data, as well as derive state using functions like map, reduce, filter, and includes.',

    cardColorLight: 'text-yellow-600',
    outlineColorLight: 'outline-yellow-600',
    shadowColorLight: 'shadow-yellow-600/35',

    cardColorDark: 'text-yellow-500',
    outlineColorDark: 'outline-yellow-500',
    shadowColorDark: 'shadow-yellow-500/35',
  },
  {
    id: 4,
    cardImage: <FaReact />,
    abbr: 'Knowledge about React.',
    cardTitle: 'React',
    cardDescription:
      'After a year of working with React, I`ve developed a strong understanding of hooks such as useState, useEffect and useRef. I`m also familiar with essential libraries in the React ecosystem, including React Router and React Query.',

    cardColorLight: 'text-sky-500',
    outlineColorLight: 'outline-sky-500',
    shadowColorLight: 'shadow-sky-500/35',

    cardColorDark: 'text-sky-400',
    outlineColorDark: 'outline-sky-400',
    shadowColorDark: 'shadow-sky-400/35',
  },
  {
    id: 5,
    cardImage: <RiTailwindCssFill />,
    abbr: 'Knowledge about Tailwind CSS.',
    cardTitle: 'Tailwind CSS',
    cardDescription:
      'I`ve also gained practical experience with Tailwind CSS, allowing me to efficiently create highly customizable and responsive designs.',

    cardColorLight: 'text-cyan-600',
    outlineColorLight: 'outline-cyan-600',
    shadowColorLight: 'shadow-cyan-600/35',

    cardColorDark: 'text-cyan-700',
    outlineColorDark: 'outline-cyan-700',
    shadowColorDark: 'shadow-cyan-700/35',
  },
  {
    id: 6,
    cardImage: <FaGitAlt />,
    abbr: 'Knowledge about Git.',
    cardTitle: 'Git',
    cardDescription:
      'I`ve developed proficiency in using Git for version control and GitHub for collaborative development. My experience includes initializing repositories, tracking changes, managing branches, and sharing projects.',

    cardColorLight: 'text-emerald-600',
    outlineColorLight: 'outline-emerald-600',
    shadowColorLight: 'shadow-emerald-600',

    cardColorDark: 'text-emerald-700',
    outlineColorDark: 'outline-emerald-700',
    shadowColorDark: 'shadow-emerald-700/35',
  },
];

function HeaderCards() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='flex items-center gap-6'>
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col gap-1 items-center bg-bgColorMain w-60 min-h-full rounded-md p-6 shadow-lg ${
            theme === 'light' ? card.shadowColorLight : card.shadowColorDark
          } cursor-pointer outline outline-1 ${
            theme === 'light' ? card.outlineColorLight : card.outlineColorDark
          } hover:-translate-y-8 hover:origin-bottom hover:-rotate-12 transition-all duration-300`}
        >
          <div>
            <abbr title={card.abbr}>
              <span
                className={`text-5xl ${
                  theme === 'light' ? card.cardColorLight : card.cardColorDark
                }`}
              >
                {card.cardImage}
              </span>
            </abbr>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <p
              className={`text-lg ${
                theme === 'light' ? card.cardColorLight : card.cardColorDark
              }`}
            >
              {card.cardTitle}
            </p>

            <p className='text-sm text-textColorMain tracking-wide'>
              {card.cardDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderCards;
