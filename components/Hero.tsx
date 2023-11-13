import React, { FC } from 'react'
import { getServerSession } from "next-auth";
import Link from 'next/link'

import { HeroButton } from './HeroButton'
import { MoveRight } from 'lucide-react';

interface HeroProps {
  
}

export const Hero: FC<HeroProps> = async ({  }) => {
    const session = await getServerSession()

    return (
        <div className='bg-slate-50'>
            <div className="max-w-[85rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Build Better Products</h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                        Manage your documentation for all your projects faster and better - with all the information at your fingertips.
                    </p>

                    <div className="mt-8 flex justify-start">
                        {session?.user ? (
                            <Link href={'/dashboard'} className="inline-flex justify-center items-center text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
                                Go to dashboard
                                <MoveRight className='w-4 h-4 ml-2' />
                            </Link>
                        ) : (
                            <HeroButton />
                        )}
                    </div>
                    </div>

                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>
                </div>
            </div>
        </div>
    )
}


