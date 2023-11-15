import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MoveLeft } from 'lucide-react'

import { cn } from "@/lib/utils"
import { LoginForm } from "@/components/LoginForm"
import { Icons } from "@/components/Icons"

export const metadata: Metadata = {
  title: "Login Form",
  description: "Login in or register today.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative min-h-screen py-32 md:py-0 flex-col justify-center items-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* <Link
          href="/examples/authentication"
          className={cn(
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link> */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-foreground dark:bg-background" />
          <Link href={'/'} className="relative z-20 flex items-center text-lg font-medium group">
            <MoveLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-all" />
            Back
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <div className="flex justify-center items-center mb-6">
                <Icons.logo className="w-12 h-12" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign In
              </h1>
              <p className="text-sm text-muted-foreground">
                Select one of the providers below to get started.
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}