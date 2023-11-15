'use client'

import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { signOut } from 'next-auth/react' 

import { Button } from './ui/button';
import { LogOut } from 'lucide-react'

interface LoggedInUserProps {
  
}

export const LoggedInUser: FC<LoggedInUserProps> = ({  }) => {
    const [user, setUser] = useState<any>();
    const router = useRouter()

    const fetchSessionUser = async () => {
        const response = await fetch("/api/auth/user")
        const result = await response.json()
        console.log(result)
        return result
    }

    useEffect(() => {
        fetchSessionUser().then((result) => setUser(result.user));
    }, []);
    return (
        <div>
            {user ? (
                <div className='flex justify-start items-center gap-2'>
                    <Button variant={'ghost'} size={'icon'} onClick={() => signOut()}>
                        <LogOut className='w-4 h-4' />
                    </Button>
                    <div className="w-10 h-10 shadow-md text-white rounded-full p-4 bg-indigo-600 flex justify-center items-center relative overflow-hidden">
                        {user.image && (
                            <Image
                            src={user.image ?? ""}
                            alt={user.name ?? ""}
                            fill
                            />
                        )}
                        <div className='text-sm font-medium'>{user.name.charAt(0)}{user.name.split(' ')[1].charAt(0)}</div>
                    </div>
                </div>
            ) : (
                <Button onClick={() => router.push('/login')} className='bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border dark:text-white'>Login</Button>
            )}
        </div>
    )
}