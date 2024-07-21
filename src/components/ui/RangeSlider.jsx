import React, { useState } from 'react';

const RangeSlider = ({ min, max, step=1 }) => {
  const [range, setRange] = useState({ min: Math.max(10,min), max: max });

  const handleMinChange = (e) => {
    const value = Math.max(10,Math.min(e.target.value, range.max));
    setRange({ ...range, min: value });
  };

  const handleMaxChange = (e) => {
    const value = Math.max(e.target.value, range.min);
    setRange({ ...range, max: value });
  };

  return (
    <div>
      {/* <p className='text-slate-500 font-semibold text-sm'>Select Price Range</p> */}
      <p className='text-slate-600 font-semibold text-sm'>Price Range(Rs): <span className='text-orange-500'>{range.min} - {range.max}</span></p>
      <div className='flex items-center gap-2'>
        <label className='text-slate-600 font-semibold'>
          min:{range.min}
        </label>
        <input
            type="range"
            min={Math.max(10,min)}
            max={max}
            value={range.min}
            step={step}
            onChange={handleMinChange}
          />
      </div>
      <div className='flex items-center gap-2'>
        <label className='text-slate-600 font-semibold'>
          max:{range.max}
        </label>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={range.max}
            onChange={handleMaxChange}
          />
      </div>
    </div>
  );
};

export default RangeSlider;