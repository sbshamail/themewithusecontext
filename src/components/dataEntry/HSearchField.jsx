import React from 'react';
import HIconify from '../@core/icon/HIconify';
const HSearchField = ({
  label,
  required,
  type,
  name,
  placeholder,
  value,
  setFilterEnter,
  onChange,
  size,
  className
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setFilterEnter(true);
    }
  };
  return (
    <div>
      {label && (
        <>
          <label className={`${size ? 'text-[0.7em]' : 'text-[0.8em]'}`}>
            {label || 'Title'} &nbsp;
            {required && <Required />}
          </label>

          <br />
        </>
      )}
      <div className='relative text-lg bg-transparent text-gray-800'>
        <div className=' border-b-2 border-teal-500 mb-2'>
          <input
            type={type || 'text'}
            placeholder={placeholder || 'Type...'}
            name={name}
            value={value}
            className={`${
              size ? '' : 'p-1 pl-4 '
            } ${className} mr-3 px-2 border-2 leading-tight rounded-3xl border-blue-600 pr-10 shadow-sm sm:text-sm  w-full focus:ring-blue-400 focus:border-blue-400`}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={() => setFilterEnter(true)}
            className='absolute !bg-[#2b60fe] hover:!bg-[#1f57ff] border right-0 top-1/2 -translate-y-1/2  bg-transparent text-white  rounded-full cursor-pointer '
          >
            <HIconify
              className='p-0 m-0'
              fontSize={`${size ? '1.4em' : '1.6em'}`}
              icon='material-symbols-light:search'
              color='white'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HSearchField;
