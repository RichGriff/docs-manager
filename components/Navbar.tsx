'use client'

import React, { FC } from 'react'
import Link from 'next/link'

import { LoggedInUser } from './LoggedInUser'
import { Icons } from './Icons'
import { useSession } from 'next-auth/react'

interface NavbarProps {
  
}

const navigation = [
  { id: 1, label: 'Projects', url: '/projects' },
  { id: 2, label: 'User Guides', url: '/user-guides' },
  { id: 3, label: 'Technical', url: '/technical' },
]

export const Navbar: FC<NavbarProps> = ({  }) => {
  const session = useSession()

  return (
    <div className="border-b ">
      <div className="flex h-16 justify-start items-center px-4">
        <div className='w-full mx-6 flex justify-evenly'>
          <div className='flex h-10 justify-start items-center gap-6 w-1/3'>
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              Documentor
            </span>
          </Link>
          </div>
          <div className='flex h-10 justify-center items-center gap-6 w-1/3'>
            {navigation.map((item) => (
              <Link 
                key={item.id} 
                href={item.url}
                className='text-sm text-gray-700 hover:text-black'
              >
                {item.label}
              </Link>
            ))}
            {session?.data?.user && (
              <Link href={'/docs'} className='text-sm text-gray-700 hover:text-black'>Docs</Link>
            )}
          </div>
          <div className='flex h-10 justify-end items-center gap-6 w-1/3'>
            {/* <Button onClick={() => router.push('/login')}>Login</Button> */}
            <LoggedInUser />
          </div>
        </div>
      </div>
    </div>
  )
}