import LogIn from '../../components/component/log-in';
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import LandingHeader from '@/components/component/landingHeader';

export default async function Login() {
  // if user is already logged in, redirect to /home
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    redirect('/home')
  } else {
    return (
      <div className='flex flex-col min-h-[100dvh]'>
        <LandingHeader />
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <LogIn />
        </div>
      </div>
    )
  }

}
