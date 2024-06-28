import React, { useState } from 'react';
import useClickOutside from 'src/hamailUi/@core/functions/useClickOutside';

const MultiSelection = ({
  list,
  values,
  setValues,
  itemName,
  title,
  position = 'center'
}) => {
  // console.log(values, list);
  const [open, setOpen] = useState(false);
  if (position === 'center') {
    position = 'top-[100%]  left-1/2 -translate-x-1/2';
  } else if (position === 'left') {
    position = 'top-[100%]  left-0';
  } else if (position === 'right') {
    position = 'top-[100%]  right-0';
  }
  const toggle = () => setOpen(false);
  const divRef = useClickOutside(toggle);
  const handleClick = (item) => {
    // Check if the item is already included by looking at a unique identifier, e.g.,[itemName]
    if (values.some((v) => v[itemName] === item[itemName])) {
      // Remove the item if it is already included
      setValues(values.filter((v) => v[itemName] !== item[itemName]));
    } else {
      // Add the item if it is not included
      setValues([...values, item]);
    }
  };
  return (
    <>
      <div ref={divRef} className='relative max-w-max '>
        <div>
          <div
            className='p-1 flex cursor-pointer select-none rounded-sm'
            onClick={() => setOpen(!open)}
          >
            <div style={{ border: '1px solid rgba(0,0,0,0.3)' }} className='p-2 rounded'>
              <span className=' font-semibold'>{title}</span>
            </div>
          </div>
          {open && (
            <div
              style={{ border: '1px' }}
              className={`absolute bg-white shadow-xl z-50 max-h-64 overflow-y-auto ${position}`}
            >
              <div className='  w-full min-w-[200px] max-h-[300px] flex flex-col border-1 rounded-sm '>
                {list?.map(
                  (item, index) =>
                    item[itemName] && (
                      <span
                        style={{ borderBottom: '1px solid' }}
                        className={`w-full !border-b-2 !border-gray-200  cursor-pointer hover:bg-blue-300 p-2 
                        ${
                          values.some((v) => v[itemName] === item[itemName])
                            ? 'bg-blue-200'
                            : ''
                        }`}
                        key={index}
                        onClick={() => handleClick(item)}
                      >
                        {item[itemName]}
                      </span>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiSelection;
