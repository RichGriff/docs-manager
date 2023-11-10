import { Announcement } from "@/components/Announcement";
import CallToAction from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { LatestGuides } from "@/components/LatestGuides";
import { LatestTech } from "@/components/LatestTech";
import { getServerSession } from "next-auth";
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession()
  
  return (
    <>
      <Hero />
      {/* <Announcement /> */}
      <Features />
      <LatestTech />
      <LatestGuides />
      {/* <CallToAction /> */}
    </>
  )
}
  



        
