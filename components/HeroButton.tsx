'use client'
import React, { FC } from 'react'
import { signIn } from 'next-auth/react'

interface HeroButtonProps {
  
}

export const HeroButton: FC<HeroButtonProps> = ({  }) => {
  return (
    <a onClick={() => signIn('azure-ad', { callbackUrl: process.env.NEXT_PUBLIC_SITE_URL })} className="inline-flex justify-center items-center text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
        <svg viewBox="0 0 48 48" className='w-6 h-6 mr-2'><path fill="#FFFFFF" d="M46 40L29.317 10.852 22.808 23.96 34.267 37.24 13 39.655zM13.092 18.182L2 36.896 11.442 35.947 28.033 5.678z"/></svg>
        Continue with Azure
    </a>
  )
}