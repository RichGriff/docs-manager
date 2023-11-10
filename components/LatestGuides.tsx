import React, { FC } from 'react'
import Image from 'next/image'

interface LatestGuidesProps {
  
}

export const LatestGuides: FC<LatestGuidesProps> = ({  }) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
          <div className="w-full h-64 relative">
            <Image
                src='https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                alt=''
                fill
                className='object-cover rounded-xl'
            />
            {/* <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" /> */}
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
            Unity’s inside sales team drives 80% of its revenue with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Learn more
            <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </a>
        <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
        <div className="w-full h-64 relative">
            <Image
                src='https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
                alt=''
                fill
                className='object-cover rounded-xl'
            />
        </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
            Living Spaces creates a unified experience across the customer journey.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Learn more
            <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </a>
        <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
            <div className="w-full h-64 relative">
                <Image
                    src='https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    alt=''
                    fill
                    className='object-cover rounded-xl'
                />
            </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Learn more
            <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </a>
      </div>
    </div>
  )
}