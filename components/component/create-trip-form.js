'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createClient } from '@/utils/supabase/client'



export function CreateTripForm() {


  return (
    (<Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Create Trip</CardTitle>
        <CardDescription>Fill out the form below to create a new trip.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Title" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Description" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="days">Number of days</Label>
          <Input id="days" placeholder="Days" type="number" />
        </div>
        <div
          className="border-dashed border-2 border-gray-300 rounded-lg w-full p-6 flex items-center justify-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <span
            className="flex h-12 w-12 items-center text-sm border border-gray-200 border-gray-300 rounded-md justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-800">
            <UploadIcon className="h-6 w-6" />
            <span className="sr-only">Upload</span>
          </span>
          <span className="ml-3">Drag and drop your image here or click to browse.</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>)
  );
}


function UploadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>)
  );
}
