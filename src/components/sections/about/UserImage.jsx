import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { FaUserAlt } from 'react-icons/fa';

function UserImage() {
  const [isImage, setIsImage] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className='relative overflow-hidden shadow-xl outline outline-1 outline-bgColorContrast rounded-md'>
      <span
        className={`bg-bgColorContrast w-44 py-2 text-textColorSecondary text-lg text-center absolute top-6 -left-10 z-50 -rotate-45 tracking-wider`}
      >
        What's up
      </span>
      {isImage ? (
        <img />
      ) : (
        <div
          className={`flex items-center justify-center bg-bgColorMain text-textColorSecondary w-72 min-h-[28rem] text-5xl rounded-md`}
        >
          <FaUserAlt />
        </div>
      )}
    </div>
  );
}

export default UserImage;
