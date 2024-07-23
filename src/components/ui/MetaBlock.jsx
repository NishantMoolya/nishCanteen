import React, { useEffect, useState } from 'react'

const MetaBlock = ({ children,label,value,color='bg-violet-500' }) => {
    const [metaValue, setMetaValue] = useState(0);
    useEffect(() => {
        const inc = Math.floor(value/10);
        if (metaValue !== value) { 
            const timer = setInterval(() => {
                setMetaValue(prev => Math.min(value,prev+inc));
            }, 200);
            return () => clearInterval(timer);
        }
    },[]);
    return (
        <div className={`${color} text-white font-bold rounded-xl p-4 flex justify-center gap-3 items-center flex-1`}>
            {children}
            <div className='flex flex-col items-center'>
                <p className='capitalize'>{label}</p>
                <p className='text-xl'>{metaValue}</p>
            </div>
        </div>
    )
}

export default MetaBlock