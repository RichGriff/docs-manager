import React, { FC } from 'react'

interface LatestTechProps {
  
}

export const LatestTech: FC<LatestTechProps> = ({  }) => {
  return (
    <div className='bg-slate-50'>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Insights</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights from industry experts.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description" />
            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
            Sponsored
            </span>
        </div>

        <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
            Studio by Preline
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
            Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
            Read more
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
        </div>
        </a>



        <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
        </div>

        <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
            Onsite
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
            Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
            Read more
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
        </div>
        </a>



        <a className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="flex-auto p-4 md:p-6">
            <h3 className="text-xl text-white/[.9] group-hover:text-white"><span className="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
        </div>
        <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
            Visit the site
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        </div>
        </a>

    </div>
    </div>
    </div>
  )
}