import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold">NishDigital Canteen</h1>
                    <p className="text-sm mt-2">Serving you with the best digital dishes!</p>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
                </div>
                <div className="text-sm">
                    <p>&copy; 2024 NishDigital Canteen. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer