import React, { FC } from 'react'

interface FeaturesProps {
  
}

export const Features: FC<FeaturesProps> = ({  }) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
          <div>
            <div>
              <h3 className="block font-bold text-gray-800 dark:text-white">Build your portfolio</h3>
              <p className="text-gray-600 dark:text-gray-400">The simplest way to keep your portfolio always up-to-date.</p>
            </div>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </a>
        <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
          <div>
            <div>
              <h3 className="block font-bold text-gray-800 dark:text-white">Get freelance work</h3>
              <p className="text-gray-600 dark:text-gray-400">New design projects delivered to your inbox each morning.</p>
            </div>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </a>
        <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
          <div>
            <div>
              <h3 className="block font-bold text-gray-800 dark:text-white">Sell your goods</h3>
              <p className="text-gray-600 dark:text-gray-400">Get your goods in front of millions of potential customers with ease.</p>
            </div>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}