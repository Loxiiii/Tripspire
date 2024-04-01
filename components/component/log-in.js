'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from '../../app/login/action'


export default function LogIn() {
  return (
    <form className="px-4 py-12 md:py-24 lg:py-32">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Log in</h2>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to log in</p>
        </div>
        <div className="mx-auto space-y-4 md:w-64 lg:w-96">
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button formAction={login} className="w-full">Log in</Button>
        </div>
      </div>
    </form>)
  ;
}
