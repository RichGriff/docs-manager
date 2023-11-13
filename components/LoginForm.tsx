"use client"

import * as React from "react"
import { signIn } from 'next-auth/react'

import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Icons } from "./Icons"

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form> */}
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div> */}
      <div className="flex flex-col justify-start items-center gap-2">
        <Button 
            variant="outline" 
            type="button" 
            disabled={isLoading} 
            className="w-full"
            onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/dashboard' })}
        >
            {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
            )}{" "}
            Github
        </Button>
        <Button 
            variant="outline" 
            type="button" 
            disabled={isLoading} 
            className="w-full"
            onClick={() => signIn('azure-ad', { callbackUrl: 'http://localhost:3000/dashboard' })}
        >
            {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
            <Icons.azure className="mr-2 h-4 w-4" />
            )}{" "}
            Azure
        </Button>
      </div>
    </div>
  )
}