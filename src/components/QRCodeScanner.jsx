import React, { useEffect, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRCodeScanner = ({ setResult }) => {
  const videoRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();

  useEffect(() => {
    codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
        if (result) {
          setResult(result.text);
        }
        if (err) console.log('qr code scanning',err)
      });
    return () => codeReader.reset();
  }, [codeReader]);

  return (
    <div className="flex flex-col items-center justify-center sm:w-[500px] w-full">
      <div className="bg-white p-2 rounded shadow">
        <video ref={videoRef} className="w-full rounded" />
      </div>
    </div>
  );
};

export default QRCodeScanner;