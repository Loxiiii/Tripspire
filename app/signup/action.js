'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData) {
  const supabase = createClient()
  console.log('you hit the signup function!')
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  console.log('the data sent is: ', data)

  const { error } = await supabase.auth.signUp(data)
  if (error) {
    console.log('the error is: ', error)
    redirect('/error')
  }
  console.log('There was no error, redirecting to /login')
  // revalidatePath('/', 'layout')
  redirect('/login')
}