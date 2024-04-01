import { createBrowserClient } from '@supabase/ssr'
import { revalidatePath } from 'next/cache'


export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

export function getAvatarUrl(avatarName) {
  console.log('this is the avatar name i receive as parameter: ', avatarName)
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${avatarName}`
  console.log('this is the avatar url i return: ', url)
  return url;
}

export async function signOutClient() {
  const supabase = createClient()
  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }
  // revalidatePath('/', 'layout')
}