import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <h1 class="text-xl font-bold">Digital Canteen</h1>
                    <p class="text-sm mt-2">Serving you with the best digital dishes!</p>
                </div>
                <div class="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="#" class="text-gray-400 hover:text-white">Contact Us</a>
                </div>
                <div class="text-sm">
                    <p>&copy; 2024 Digital Canteen. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer