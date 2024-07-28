// src/QrCodeScanner.js
import React, { useState } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';

const QrCodeScanner = () => {
  const [qrData, setQrData] = useState(''); // Data to encode in the QR code
  const [qrCodeUrl, setQrCodeUrl] = useState(''); // Generated QR code Data URL
  const [scannedData, setScannedData] = useState(''); // Scanned QR code data

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(qrData);
      setQrCodeUrl(url);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const handleScan = (data) => {
    if (data) {
      setScannedData(data); // Set scanned data
    }
  };

  const handleError = (err) => {
    console.error('QR Code scan error:', err);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator and Scanner</h1>
      <input
        type="text"
        placeholder="Enter data for QR code"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
        className="border p-2 mb-4"
      />
      <button onClick={generateQRCode} className="bg-blue-500 text-white p-2 rounded">
        Generate QR Code
      </button>
      {qrCodeUrl && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Generated QR Code:</h2>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
      <div className="mt-4">
        <h2 className="text-xl mb-2">Scan QR Code:</h2>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
      {scannedData && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Scanned Data:</h2>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QrCodeScanner;