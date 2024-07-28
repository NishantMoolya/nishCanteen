// src/QRCodeDisplay.js
import React, { useEffect, useState } from 'react';

const QRCode = ({ token }) => {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Your QR Code</h1>
      {<img src={token} alt="QR Code" className="w-64 h-64" />}
    </div>
  );
};

export default QRCode;