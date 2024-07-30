import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeToast } from '../../redux/reducers/toastReducer';

const Toast = ({ message = 'user feedback', type = 'success', onClose = () => {}, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useDispatch();
  useEffect(() => {
    setIsVisible(true); // Show the toast when it mounts
    const timer = setTimeout(() => {
        setIsVisible(false); // Start slide-out animation
        setTimeout(() => {onClose();dispatch(closeToast())}, 300); // Call onClose after animation duration
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [duration, onClose]);

  const toastStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div  className={`fixed bottom-5 right-5 py-2 px-4 rounded shadow text-white transition-transform duration-300 ease-in-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${toastStyles[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
