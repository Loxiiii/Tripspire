'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createClient } from '@/utils/supabase/client'
import { useState, useEffect } from 'react'
import { UploadTripThumbnail } from './uploadTripThumbnail'



export function CreateTripForm({ user }) {
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [numberOfDays, setNumberOfDays] = useState(null)
  const [uploading, setUploading] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const supabase = createClient();
  console.log('the user is: ', user)

  const handleSave = async (title, description, numberOfDays) => {
    
    const { data, error } = await supabase
    .from('trips')
    .insert([
      { title, description, numberOfDays, user_id: user.id, thumbnail_url: thumbnailUrl },
    ])
    .select()

    if (error) {
      throw error
    } else {
      console.log('Trip created successfully: ', data)
    }
  }

  const handleThumbnailUpload = (filePath, ) => {
    setThumbnailUrl(filePath)
  }


  return (
    (<Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Create Trip</CardTitle>
        <CardDescription>Fill out the form below to create a new trip.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input 
            id="title" 
            placeholder="Title" 
            value={title || ''} 
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description" 
            placeholder="Description"
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="days">Number of days</Label>
          <Input
            id="days" 
            placeholder="Days" 
            type="number"
            value={numberOfDays || ''} 
            onChange={(e) => setNumberOfDays(e.target.value)}/>
        </div>
        <UploadTripThumbnail user={user} onUpload={handleThumbnailUpload} thumbnailUrl={thumbnailUrl}/>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={() => handleSave(title, description, numberOfDays)}>Save</Button>
      </CardFooter>
    </Card>)
  );
}


