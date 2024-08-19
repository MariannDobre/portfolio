import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Tooltip({
  children,
  tooltipContent = 'Tooltip Content Goes Here',
  position = 'top',
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme } = useContext(ThemeContext);

  const getTooltipPosition = (upcomingPosition) => {
    switch (upcomingPosition) {
      // Position the tooltip in the UPPER LEFT part of the parent
      case 'top-left':
        return {
          // -100% - tooltip padding on Y axis - tooltip outline width - global containers padding
          top: 'calc(-100% - 12px - 2px - 6px)',
          // 8px => tooltip outline width + global containers padding
          right: 'calc(100% + 8px)',
        };

      // Position the tooltip in the UPPER RIGHT part of the parent
      case 'top-right':
        return {
          // -100% - tooltip padding on Y axis - tooltip outline width - global containers padding
          top: 'calc(-100% - 12px - 2px - 6px)',
          // 8px => tooltip outline width + global containers padding
          left: 'calc(100% + 8px)',
        };

      // Position the tooltip to the LEFT of the parent
      case 'left':
        return {
          top: '50%',
          // 8px => tooltip outline width + global containers padding
          right: 'calc(100% + 8px)',
          transform: 'translate(0, -50%)',
        };

      // Position the tooltip to the RIGHT of the parent
      case 'right':
        return {
          top: '50%',
          // 8px => tooltip outline width + global containers padding
          left: 'calc(100% + 8px)',
          transform: 'translate(0, -50%)',
        };

      // Position the tooltip BELOW the parent in the LEFT part
      case 'bottom-left':
        return {
          // -100% - tooltip padding on Y axis - tooltip outline width - global containers padding
          bottom: 'calc(-100% - 12px - 2px - 6px)',
          // 8px => tooltip outline width + global containers padding
          right: 'calc(100% + 8px)',
        };

      // Position the tooltip BELOW the parent
      case 'bottom':
        return {
          // -100% - tooltip padding on Y axis - tooltip outline width - global containers padding
          bottom: 'calc(-100% - 12px - 2px - 6px)',
          left: '50%',
          transform: 'translate(-50%)',
        };

      // Position the tooltip BELOW the parent in the RIGHT part
      case 'bottom-right':
        return {
          // -100% - tooltip padding on Y axis - tooltip outline width - global containers padding
          bottom: 'calc(-100% - 12px - 2px - 6px)',
          // 8px => tooltip outline width + global containers padding
          left: 'calc(100% + 8px)',
        };

      // By default the tooltip will be positioned ABOVE the parent
      default:
        return {
          // -100% - tooltip padding on Y axis - tooltip outline width - global containers padding
          top: 'calc(-100% - 12px - 2px - 6px)',
          left: '50%',
          transform: 'translate(-50%)',
        };
    }
  };

  return (
    <div
      className='relative flex items-center justify-center'
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <span
          style={getTooltipPosition(position)}
          className='absolute flex items-center justify-center text-center whitespace-nowrap text-sm text-textColorMain tracking-wide bg-bgColorSecondary outline outline-1 outline-bgColorContrast py-1.5 px-3 z-[9999] rounded-md shadow-xl'
        >
          {tooltipContent}
        </span>
      )}
    </div>
  );
}

export default Tooltip;
