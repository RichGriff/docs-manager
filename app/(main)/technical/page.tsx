import { Announcement } from "@/components/Announcement";
import SearchHero from "@/components/SearchHero";
import { getServerSession } from "next-auth";

export default async function TechnicalDocs() {
  const session = await getServerSession()

  const allTechnicalDocs = [
    { id: 1, title: 'Document One', image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio' },
    { id: 2, title: 'Document Two', image: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio' },
    { id: 3, title: 'Document Three', image: 'https://images.unsplash.com/photo-1550265486-df3659283974?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio' },
    { id: 4, title: 'Document Four', image: 'https://plus.unsplash.com/premium_photo-1664358190116-6b01987a890a?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio' },
  ]

  const filterTags = [
    { label: 'Dynamics' },
    { label: 'SharePoint' },
    { label: 'Web' },
    { label: 'Care' },
    { label: 'Resources' }
  ]
  
  return (
    <div className="py-12">
        {/* Search */}
        <SearchHero 
            heading="Technical Documentation"
            description="This documentation is aimed to be used by the Techology team."
            searchPlaceholder="Search documentation"
            topics={filterTags}
        />

        {/* Results */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-8">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

            {allTechnicalDocs.map((doc) => (
                <ProjectCard key={doc.id} doc={doc} />
            ))}

            </div>
        </div>

    </div>
  )
}

const ProjectCard = ({ doc }: any) => {
    return (
        <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <img 
                        className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" 
                        src={doc.image}
                        alt="Image Description" 
                    />
                </div>

                <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        {doc.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        {doc.description}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </p>
                </div>
            </div>
        </a>
    )
}