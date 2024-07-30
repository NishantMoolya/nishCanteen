import { useEffect, useState } from "react";

const useToast = () => {
    const [openToast, setOpenToast] = useState(false);
    const [toastData, setToastData] = useState({ message:'user feedback', type:'success', onClose:() => {}, duration:3000 });

    const showToast = (message,type='success',onClose=() => {},duration=3000) => {
        setToastData(prev => ({message,type,onClose:() => {setOpenToast(false);onClose();},duration}));
        setOpenToast(true);
    }
    return { toastData,openToast,showToast };
}

export default useToast