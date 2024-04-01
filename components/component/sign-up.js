'use client';

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signup } from '../../app/signup/action'

export default function SignUp() {
  return (
    (<form className="px-4 py-12 md:py-24 lg:py-32">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <div className="mx-auto max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Name</Label>
            <Input id="name" placeholder="Joe Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
          </div>
          <Button formAction={signup} className="w-full">Sign Up</Button>
        </div>
      </div>
    </form>)
  );
}
