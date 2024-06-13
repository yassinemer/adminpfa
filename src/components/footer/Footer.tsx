import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-950 mt-auto bottom-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Blitz shop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer