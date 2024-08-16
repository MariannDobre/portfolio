import React from 'react';
import { SiUdemy } from 'react-icons/si';

function Course() {
  return (
    <div className='flex flex-col gap-6 p-3 w-full'>
      <div className='flex flex-col gap-1'>
        <p className='text-2xl text-stone-200'>
          <span className='text-3xl uppercase font-medium text-slate-400'>
            Course name:
          </span>
          &nbsp;The Ultimate React Course 2024: React, Next.js, Redux & More
        </p>

        <p className='text-lg text-stone-300'>
          <span className='text-xl uppercase font-medium text-slate-500'>
            Note:
          </span>
          &nbsp;This is a course that i followed to build my React & React
          Ecosystem foundations
        </p>
      </div>

      <div className='flex gap-6 max-w-full min-h-[480px]'>
        <div className='flex flex-col items-center w-96 min-h-full bg-bgColorSecondary shadow-xl rounded-md outline outline-1 outline-bgColorContrast'>
          <div className='flex items-center justify-center bg-stone-200 w-full min-h-36 rounded-md border-b-[1px] border-bgColorContrast shadow-lg'>
            <p className='flex items-start text-3xl text-fuchsia-600 font-bold'>
              <span className='-mr-1 -mt-[1px]'>
                <SiUdemy />
              </span>
              demy
            </p>
          </div>

          <div className='flex flex-col items-center gap-6 h-full p-3'>
            <p className='text-blue-500 text-lg tracking-wide'>
              Technologies Used
            </p>

            <ul className='text-stone-200 text-sm tracking-wide grid grid-cols-2 gap-y-3 list-disc marker:text-blue-500'>
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
              className='text-lg mt-auto text-stone-200 no-underline tracking-wide hover:text-blue-500 focus-visible:text-blue-500 transition-all duration-300'
              href='https://www.udemy.com/certificate/UC-06ab86a2-5b3f-4d2a-beb0-c2eaaed813e2/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Udemy Certificate
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <p className='text-blue-500 text-lg tracking-wide'>Topics Covered</p>

          <ul className='text-stone-200 text-sm tracking-wide grid grid-cols-2 gap-y-3 list-disc list-inside marker:text-blue-500'>
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
