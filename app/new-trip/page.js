import { CreateTripForm } from '@/components/component/create-trip-form'
import HomeHeader from '@/components/component/homeHeader.js'
import { createClient, getProfileById } from '@/utils/supabase/server'
import { getAvatarUrl } from '@/utils/supabase/server.js'
import { redirect } from 'next/navigation'

const Trip = async () => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  if (user) {
    let profile = await getProfileById(user.id)
    let avatarURL = getAvatarUrl(profile.data.avatar_url)
    return (
      <div className="">
        <HomeHeader avatar={avatarURL}/>
        <div className='h-screen flex justify-center items-center'>
          <CreateTripForm />
        </div>
      </div>
    )
  } else {
    redirect('/login')
  }
}

export default Trip;