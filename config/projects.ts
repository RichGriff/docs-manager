import { ProjectConfig } from "@/types"

export const projectsConfig: ProjectConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Docs",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Introduction",
      items: [
        {
          title: "About",
          href: "/docs",
        },
      ],
    },
    // {
    //   title: "Documentation",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/documentation",
    //     },
    //     {
    //       title: "Contentlayer",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Components",
    //       href: "/docs/documentation/components",
    //     },
    //     {
    //       title: "Code Blocks",
    //       href: "/docs/documentation/code-blocks",
    //     },
    //     {
    //       title: "Style Guide",
    //       href: "/docs/documentation/style-guide",
    //     },
    //     {
    //       title: "Search",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Blog",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Build your own",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Writing Posts",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Dashboard",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Layouts",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Server Components",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Authentication",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Database with Prisma",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "API Routes",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Marketing Site",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "File Structure",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Tailwind CSS",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Typography",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //   ],
    // },
  ],
  projects: [
    {
        id: 1, 
        name: 'Pobl Group Website',
        description: 'New group website with a fresh new look and customer portal.',
        href: "/projects/website",
        image: 'https://images.unsplash.com/photo-1582561971531-442566b17519?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    { 
        id: 2, 
        name: 'Project Test Two',
        href: "/", 
        description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio',
        image: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    { 
        id: 3, 
        name: 'Project Test Three',
        href: "/", 
        description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio',
        image: 'https://images.unsplash.com/photo-1550265486-df3659283974?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    { 
        id: 4, 
        name: 'Project Test Four',
        href: "/", 
        description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio', 
        image: 'https://plus.unsplash.com/premium_photo-1664358190116-6b01987a890a?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
]
}