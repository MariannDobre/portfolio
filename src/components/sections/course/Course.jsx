import React, { useContext, useState } from 'react';
import { SiUdemy } from 'react-icons/si';
import { ThemeContext } from '../../../context/ThemeContext';

function Course() {
  const [expandList, setExpandList] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleExpandList = () => {
    setExpandList((action) => !action);
  };

  return (
    <div
      id='course'
      className='flex flex-col sm:flex-col gap-6 p-3 w-full'
    >
      <div className='flex flex-col gap-1'>
        <p className='text-lg text-textColorMain lg:text-xl xl:text-2xl'>
          <span
            className={`text-xl font-medium ${
              theme === 'light' ? 'text-slate-600' : 'text-zinc-500'
            } lg:text-2xl xl:text-3xl`}
          >
            Course:
          </span>
          &nbsp;The Ultimate React Course 2024: React, Next.js, Redux & More
        </p>

        <p
          className={`text-sm ${
            theme === 'light' ? 'text-blue-300' : 'text-violet-200'
          } lg:text-base xl:text-lg`}
        >
          <span
            className={`text-base font-medium ${
              theme === 'light' ? 'text-slate-700' : 'text-zinc-600'
            } lg:text-lg xl:text-xl`}
          >
            Note:
          </span>
          &nbsp;This is a course that i followed to build my React & React
          Ecosystem foundations
        </p>
      </div>

      <div className='flex flex-col sm:flex-col sm:items-start xl:flex-row gap-6 max-w-full min-h-full md:min-h-[520px]'>
        <div className='flex flex-col items-center w-72 min-h-full bg-bgColorSecondary shadow-xl rounded-md outline outline-1 outline-bgColorContrast sm:w-96 md:h-[520px]'>
          <div
            className={`flex items-center justify-center ${
              theme === 'light' ? 'bg-stone-100' : 'bg-stone-200'
            } w-full min-h-36 rounded-md border-b-[1px] border-bgColorContrast shadow-lg`}
          >
            <p className='flex items-start text-3xl text-fuchsia-600 font-bold'>
              <span className='-mr-1 -mt-[1px]'>
                <SiUdemy />
              </span>
              demy
            </p>
          </div>

          <div className='flex flex-col items-center gap-6 h-full p-3'>
            <p className='text-textColorMainHover text-base tracking-wide sm:text-lg'>
              Technologies Used
            </p>

            <ul className='text-textColorMain text-xs tracking-wide flex flex-col gap-1 list-disc marker:text-textColorMainHover sm:text-sm sm:grid sm:grid-cols-2 sm:gap-y-3 xl:flex xl:flex-col 3xl:grid 3xl:grid-cols-2'>
              <li>React</li>

              <li>React Router Dom</li>

              <li>Redux</li>

              <li>React Hook Form</li>

              <li>Supabase</li>

              <li>React Query</li>

              <li>Tailwind</li>

              <li>Styled Components</li>
            </ul>

            <a
              className='text-base mt-auto text-textColorMain no-underline tracking-wide outline-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300 sm:text-lg'
              href='https://www.udemy.com/certificate/UC-06ab86a2-5b3f-4d2a-beb0-c2eaaed813e2/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Udemy Certificate
            </a>
          </div>
        </div>

        <button
          className={`self-start block text-xs tracking-wide border-none outline-none text-textColorSecondary hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300 sm:block sm:self-start sm:text-sm xl:hidden`}
          onClick={handleExpandList}
        >
          {expandList ? 'Hide Covered Topics' : 'Expand Covered Topics'}
        </button>

        <div
          className={`flex flex-col gap-6 ${
            expandList ? 'block' : 'hidden'
          } xl:block`}
        >
          <p className='text-textColorMainHover text-base tracking-wide sm:text-lg'>
            Topics Covered
          </p>

          <ul className='text-textColorMain text-xs tracking-wide flex flex-col gap-3 list-disc list-inside marker:text-textColorMainHover sm:text-sm md:grid md:grid-cols-2 md:gap-y-3'>
            <li>
              Working with <strong>Components</strong>,&nbsp;
              <strong>Props</strong>,&nbsp;&&nbsp;<strong>JSX</strong>
            </li>

            <li>
              Working with hooks like <strong>useState</strong>,&nbsp;
              <strong>useEffect</strong>,&nbsp;<strong>useRef</strong>,&nbsp;
              <strong>useReducer</strong>
            </li>

            <li>Conditional Rendering</li>

            <li>
              Handling <strong>Events</strong>,&nbsp;
              <strong>Form Submissions</strong>
            </li>

            <li>Building reusable components</li>

            <li>
              How <strong>React</strong> works behind the scenes
            </li>

            <li>
              Data fetching with <strong>Fetch</strong>,&nbsp;
              <strong>Axios</strong>,&nbsp;&&nbsp;<strong>React Query</strong>
            </li>

            <li>
              Working with <strong>useReducer</strong>&nbsp;&&nbsp;
              <strong>Context API</strong>
            </li>

            <li>
              Working with <strong>React Router Dom</strong> for&nbsp;
              <strong>SPA</strong>&nbsp;applications
            </li>

            <li>
              Styling an application with <strong>Tailwind CSS</strong>,&nbsp;
              <strong>Styled Components</strong> or <strong>CSS Modules</strong>
            </li>

            <li>
              Working with <strong>Nested Routes</strong>
            </li>

            <li>
              Storing state in the <strong>URL</strong>
            </li>

            <li>
              Implementing <strong>Dark Mode</strong> or multiple&nbsp;
              <strong>Themes</strong> with <strong>CSS Variables</strong>
            </li>

            <li>
              React patterns such as <strong>Compound Components</strong>,&nbsp;
              <strong>Detecting Outside Clicks</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Course;
