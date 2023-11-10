import CallToAction from "@/components/CallToAction";
import { getServerSession } from "next-auth";
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession()
  
  return (
    <>
      <CallToAction />
    </>
  )
}
  



        
