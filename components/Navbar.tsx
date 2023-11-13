'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { LoggedInUser } from './LoggedInUser'
import { Icons } from './Icons'

interface NavbarProps {
  
}

const navigation = [
  { id: 1, label: 'Projects', url: '/projects' },
  { id: 2, label: 'User Guides', url: '/user-guides' },
  { id: 3, label: 'Technical', url: '/technical' },
]

export const Navbar: FC<NavbarProps> = ({  }) => {
  return (
    <div className="border-b">
      <div className="flex h-16 justify-start items-center px-4">
        <div className='w-full mx-6 flex justify-evenly'>
          <div className='flex h-10 justify-start items-center gap-6 w-1/3'>
            <Link href={'/'}>
              {/* <Image
                  src={'https://poblwebsite.azurewebsites.net/_next/image?url=https%3A%2F%2Fwww.poblgroup.co.uk%2Fwp-content%2Fthemes%2Fpoblgroup%2Fimages%2Fpobl-logo.png&w=750&q=75'}
                  width={70}
                  height={60}
                  alt='pobl logo'
                  className='hidden sm:block'
              /> */}
              <Icons.logo />
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