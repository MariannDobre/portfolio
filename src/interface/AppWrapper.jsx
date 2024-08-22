import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import PageNavigation from '../components/PageNavigation';
import Hero from '../components/sections/hero/Hero';
import PageAbout from '../components/sections/about/PageAbout';
import GitHubProfile from '../components/sections/GitHubProfile';
import PageHeading from '../components/PageHeading';
import Course from '../components/sections/course/Course';
import Projects from '../components/sections/projects/Projects';
import ContactForm from '../components/sections/contact/Contact';
import Footer from '../components/sections/footer/Footer';
import Bar from './Bar';
import {
  FaUserAlt,
  FaGithub,
  FaBook,
  FaTrophy,
  FaWrench,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

function AppWrapper() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-bgColorMain flex flex-col gap-8 p-8 relative ${theme}`}>
      <PageNavigation />

      <Hero />

      <Bar
        barColorLight='bg-gradient-to-b from-transparent to-gray-700'
        barColorDark='bg-gradient-to-b from-transparent to-textColorSecondary'
        height='h-[440px]'
      />

      <SectionMarker
        icon={<FaUserAlt />}
        sectionTitle='about'
      />

      <PageAbout />

      <Bar
        barColorLight='bg-gradient-to-b from-transparent to-gray-700'
        barColorDark='bg-gradient-to-b from-transparent to-textColorSecondary'
        height='h-[440px]'
      />

      <SectionMarker
        icon={<FaGithub />}
        sectionTitle='gitHub profile'
      />

      <GitHubProfile />

      <Bar
        barColorLight='bg-gray-700'
        barColorDark='bg-textColorSecondary'
        height='h-[440px]'
      />

      <SectionMarker
        icon={<FaBook />}
        sectionTitle='accumulated knowledge'
      />

      <PageHeading />

      <Bar
        barColorLight='bg-gradient-to-b from-transparent to-gray-700'
        barColorDark='bg-gradient-to-b from-transparent to-textColorSecondary'
        height='h-[440px]'
      />

      <SectionMarker
        icon={<FaTrophy />}
        sectionTitle='course that i followed'
      />

      <Course />

      <Bar
        barColorLight='bg-gray-700'
        barColorDark='bg-textColorSecondary'
        height='h-[440px]'
      />

      <SectionMarker
        icon={<FaWrench />}
        sectionTitle='My Personal Projects'
      />

      <Projects />

      <Bar
        barColorLight='bg-gradient-to-b from-transparent to-gray-700'
        barColorDark='bg-gradient-to-b from-transparent to-textColorSecondary'
        height='h-[440px]'
      />

      <SectionMarker
        icon={<GrMail />}
        sectionTitle='Say Hello'
      />

      <ContactForm />

      <Bar
        barColorLight='bg-gradient-to-b from-gray-700 to-transparent'
        barColorDark='bg-gradient-to-b from-textColorSecondary to-transparent'
        height='h-[440px]'
      />

      <Footer />
    </div>
  );
}

export default AppWrapper;

function SectionMarker({ icon, sectionTitle }) {
  return (
    <div className='flex items-center relative gap-6'>
      <div className='flex items-center'>
        <p
          style={{ marginLeft: 'calc(32px - 10px + 4px)' }}
          className='text-xl text-textColorMain z-10'
        >
          {icon}
        </p>
        <span className='bg-textColorSecondary text-4xl w-9 h-9 rounded-full absolute left-[18px] blur-[18px]'></span>
      </div>

      <div>
        <h1 className='capitalize text-lg text-textColorMain tracking-wider sm:text-xl md:text-2xl'>
          {sectionTitle}
        </h1>
      </div>
    </div>
  );
}
