import React from 'react';
export const HIconifySvg = ({
  fontSize = '1.2em',
  width = '1em',
  height = '1em',
  icon = 'entypo:cross',
  className,
  ...rest
}) => {
  const renderSvg = (iconContent) => {
    // Check if the content is a JSX element
    if (React.isValidElement(iconContent)) {
      return iconContent;
    }
    // Otherwise, handle it as a path string
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fontSize={fontSize}
        width={width}
        height={height}
        viewBox='0 0 20 20'
        {...rest}
      >
        <path className={`fill-current ${className}`} d={iconContent} />
      </svg>
    );
  };

  const getIcon = () => {
    switch (icon) {
      case 'entypo:cross':
        return 'M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698';

      case 'mingcute:right-fill':
        // Directly return the SVG JSX element
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <g fill='none' fillRule='evenodd'>
              <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
              <path
                fill='currentColor'
                d='M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z'
              />
            </g>
          </svg>
        );
      case 'mingcute:down-fill':
        // Directly return the SVG JSX element
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <g fill='none' fillRule='evenodd'>
              <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
              <path
                fill='currentColor'
                d='M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z'
              />
            </g>
          </svg>
        );
      case 'gridicons:dropdown':
        return 'm7 10l5 5l5-5z';
      case 'M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 8v8m-3-3l3 3l3-3':
        return 'M442.2 93.1L256 279.3L69.8 93.1L0 162.9l256 256l256-256z';
      default:
        return null;
    }
  };

  return renderSvg(getIcon());
};
