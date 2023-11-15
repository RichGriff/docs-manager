'use client'
import React, { useEffect, useState } from 'react'
import { MainNav } from './docs/MainNav'
import { DocsSidebarNav } from './docs/DocSidebarNav'
import { projectsConfig } from '@/config/projects'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const path = usePathname()
    const root = (path.replace('/', '').split('/').length == 1)

    return (
        <MainNav items={projectsConfig.mainNav}>
            {!root ? <DocsSidebarNav /> : null }
        </MainNav>
    )
}

export default Navigation
