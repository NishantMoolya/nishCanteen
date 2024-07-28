import React from 'react';

const RangeSlider = ({ range,min = 10, max = 100,handleMinChange,handleMaxChange }) => {
  return (
    <div>
      <p className='text-slate-600 font-semibold text-sm'>
        Price Range (Rs): <span className='text-orange-500'>{range.min} - {range.max}</span>
      </p>
      <div className='flex items-center gap-2'>
        <label className='text-slate-600 font-semibold'>
          Min: {range.min}
        </label>
        <input
          type="range"
          min={min}
          max={max}
          value={range.min}
          step={1}
          onChange={handleMinChange}
        />
      </div>
      <div className='flex items-center gap-2'>
        <label className='text-slate-600 font-semibold'>
          Max: {range.max}
        </label>
        <input
          type="range"
          min={min}
          max={max}
          value={range.max}
          step={1}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default RangeSlider;