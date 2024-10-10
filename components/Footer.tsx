import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Left Content */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-lg font-bold">Your Company</h1>
          <p className="text-sm text-gray-400">© 2024 Your Company. All rights reserved.</p>
        </div>
        
        {/* Footer Middle Links */}
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-400 hover:text-white">About Us</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Contact</Link>
        </div>

        {/* Footer Right Social Icons */}
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.94 3.61 9.05 8.34 9.9v-7.01h-2.51v-2.89h2.51v-2.2c0-2.48 1.49-3.84 3.75-3.84 1.08 0 2.21.19 2.21.19v2.42h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.72l-.43 2.89h-2.29v7.01c4.73-.85 8.34-4.96 8.34-9.9 0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 5.924c-.77.344-1.597.573-2.463.675.887-.532 1.571-1.375 1.892-2.376-.829.492-1.75.85-2.729 1.043a4.434 4.434 0 00-7.57 4.042A12.568 12.568 0 013.13 4.844c-.37.633-.58 1.373-.58 2.156 0 1.487.756 2.798 1.908 3.567-.702-.022-1.362-.216-1.937-.537v.053c0 2.076 1.48 3.806 3.445 4.197a4.42 4.42 0 01-2.011.076c.569 1.775 2.218 3.07 4.175 3.104a8.883 8.883 0 01-5.499 1.896c-.356 0-.708-.021-1.055-.062a12.538 12.538 0 006.79 1.994c8.144 0 12.598-6.746 12.598-12.6 0-.19-.005-.377-.013-.563.865-.623 1.617-1.401 2.214-2.285z"/>
            </svg>
          </Link>
        </div>
        
      </div>
    </footer>
    </div>
  )
}

export default Footer
  