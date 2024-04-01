import { Home } from '../../components/component/home'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  // if user is not logged in, redirect to /login
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }
  return <Home />
}