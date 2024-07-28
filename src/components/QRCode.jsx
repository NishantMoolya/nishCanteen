// src/QRCodeDisplay.js
import React, { useEffect, useState } from 'react';

const QRCode = ({ token }) => {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQRCode = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/v1/api/qrcode'); // Adjust the URL to your backend
//         setQrCode(response.data.token); // Assuming the image is stored in the 'image' field
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching QR code');
//         setLoading(false);
//       }
//     };

//     fetchQRCode();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Your QR Code</h1>
      {<img src={token} alt="QR Code" className="w-64 h-64" />}
    </div>
  );
};

export default QRCode;