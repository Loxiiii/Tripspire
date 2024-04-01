'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import spinner from '@/public/spinner.svg'
import Image from 'next/image'
import AvatarUI from './avatar'
import { getAvatarUrl } from '@/utils/supabase/client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function AccountForm({ user, profile }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatarName, setAvatarName] = useState(null)
  const [avatarUrl, setAvatarUrl] = useState(null)

  useEffect(() => {
    if (profile) {
      console.log('Profile found!', profile)
      // const jsonProfile = JSON.parse(profile.value)
      // console.log('This is the json profile: ', jsonProfile)
      let avatarURL = getAvatarUrl(profile.data.avatar_url)
      setAvatarUrl(avatarURL)
      setFullname(profile.data.full_name)
      setUsername(profile.data.username)
      setWebsite(profile.data.website)
      setAvatarName(profile.data.avatar_url) 
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log('the new avatarurl is: ', avatarUrl)
    setLoadingProfile(false)
  }, [avatarUrl])

  async function updateProfile({ username, website, avatarName }) {
    try {
      setLoading(true)
      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url: avatarName,
        updated_at: new Date().toISOString(),
      })  
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
        alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  if (loadingProfile) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className='h-10 w-10'>
          <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="100"
                  style={{objectFit: "contain"}}
                  src={spinner}
                  width="100" />

        </div>
      </div>
    )
  } else {
    return (
      <div className="h-screen flex flex-col pt-12 md:pt-14 lg:pt-16">
        <div className="container space-y-8 w-8/12 self-center flex flex-col mt-10">
          <div className='w-full flex flex-row space-x-16 items-center'>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Account</h2>
              <p className="text-gray-500 dark:text-gray-400">{'Welcome back, ' + username}</p>
            </div>         
          </div>
          <div>
            <Label htmlFor="email" className='mr-6'>Email</Label>
            <Input id="email" type="text" value={user?.email} disabled />
          </div>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              value={fullname || ''}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="website">Avatar</Label>
            <AvatarUI
              className="border rounded-full w-8 h-8 overflow-hidden"
              uid={user?.id}
              src={avatarUrl}
              alt={username}
              size={32}
              onUpload={setAvatarUrl} />            
          </div>
          <div className='flex flex-row self-center justify-center gap-x-6'>
            <div>
              <Button
                className="button primary block"
                onClick={() => updateProfile({ fullname, username, website, avatarName })}
                disabled={loading}
              >
                {loading ? 'Loading ...' : 'Update'}
              </Button>
            </div>

            <div>
              <form action="/auth/signout" method="post">
                <Button className="button block" type="submit">
                  Sign out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}