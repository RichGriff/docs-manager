import Link from 'next/link'
import React, { FC } from 'react'

interface AnnouncementProps {
  message: string
  url: {
    link: string, 
    text: string
  }
}

export const Announcement: FC<AnnouncementProps> = ({ message, url }) => {
  return (
    <div id="ab-full-width-with-dismiss-button-on-blue-bg" className="hs-removing:-translate-y-full bg-blue-600">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex">
          <p className="text-white flex justify-start items-center gap-3">
            {message}
            <Link href={url.link} target='_blank' className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white transition-all py-1 px-3 rounded-full">
              {url.text}
            </Link>
          </p>

          <div className="ps-3 ms-auto">
            <button type="button" className="inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white" data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg">
              <span className="sr-only">Dismiss</span>
              <svg className="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}