import { Announcement } from "@/components/Announcement";
import { projectsConfig } from "@/config/projects";
import { getServerSession } from "next-auth";
import Link from "next/link";
import slugify from "slugify";

export default async function Projects() {
  const session = await getServerSession()

  const allProjectDocs = projectsConfig.projects
  
  return (
    <>
        <div className="mb-12">
            <Announcement message="Check out all our current projects on our Tech Roadmap" url={{ link: 'https://roadmap.poblgroup.co.uk', text: 'See roadmap' }} />
        </div>

        {/* Section Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Project Documentation</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">Keep informed about our latest projects by reading their up to date documentation.</p>
        </div>

        {/* All */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

            {allProjectDocs.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}

            </div>
        </div>

    </>
  )
}

const ProjectCard = ({ project }: any) => {
    const projectSlug = slugify(project.name, { lower: true })

    return (
        <Link href={`/projects/${projectSlug}`} className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <div className="sm:flex justify-start items-center">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <img 
                        className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" 
                        src={project.image}
                        alt="Image Description" 
                    />
                </div>

                <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        {project.name}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        {project.description}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </p>
                </div>
            </div>
        </Link>
    )
}