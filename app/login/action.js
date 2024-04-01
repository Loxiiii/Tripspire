'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
  const supabase = createClient()
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }
  console.log('the data sent is: ', data)
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log('the error login is: ', error)
    redirect('/error')
  }
  console.log('There was no error, redirecting to /feed')
  //revalidatePath('/', 'layout')
  redirect('/home')
}
  
