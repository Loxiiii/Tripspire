'use client'
import { createClient } from '@/utils/supabase/client'
import { Image } from 'next/image'
import { useState } from 'react'
 
export function UploadTripThumbnail({ user, onUpload, thumbnailUrl }) {
  const [filePath, setFilePath] = useState('');
  
  const supabase = createClient();
  const uploadThumbnail = async (event) => {
    try {
      console.log('The uploadThumbnail event happened: ', event)
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      console.log('the files uploaded are: ', event.target.files)

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${user.id}-${Math.random()}.${fileExt}`
      const { error: uploadError } = await supabase.storage.from('trip_thumbnails').upload(filePath, file)
      setFilePath(filePath)
      if (uploadError) {
        throw uploadError
      }

      
    } catch (error) {
      console.log('Error uploading thumbnail: ', error)
      alert('Error uploading thumbnail!')
    } finally {
      // setUploading(false)
      console.log('The thumbnail was uploaded successfully!')
      onUpload(filePath)
    }
  }

  if (thumbnailUrl.length === 0) {
    console.log('There is no thumbnail')
    return (
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          onChange={uploadThumbnail}
        />
        <div className="border-dashed border-2 border-gray-300 rounded-lg w-full p-6 flex items-center justify-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <span
            className="flex h-12 w-12 items-center text-sm border border-gray-200 border-gray-300 rounded-md justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-800">
            <UploadIcon className="h-6 w-6" />
            <span className="sr-only">Upload</span>
          </span>
          <span className="ml-3">Drag and drop your image here or click to browse.</span>
        </div>
  
      </div>
  
    )

  } else {
    console.log('the thumbnailUrl is: ', thumbnailUrl)
    return (
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          onChange={uploadThumbnail}
        />
        <div className="border-dashed border-2 border-gray-300 rounded-lg w-full p-6 flex items-center justify-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <span
            className="flex h-12 w-12 items-center text-sm border border-gray-200 border-gray-300 rounded-md justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-800">
            <Image 
              className="h-6 w-6"
              alt=''
              src={`https://kgoazdpjnwigqasganef.supabase.co/storage/v1/object/public/avatars/)`} />
            <span className="sr-only">Upload</span>
          </span>
          <span className="ml-3">Drag and drop your image here or click to browse.</span>
        </div> 
      </div>
  
    )
  }
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