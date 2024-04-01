import AccountForm from './account-form'
import { createClient, getProfileById } from '@/utils/supabase/server'
import HomeHeader from '@/components/component/homeHeader.js'
import { getAvatarUrl } from '@/utils/supabase/server.js'


export default async function Account() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  let profile = await getProfileById(user.id)
  let avatarURL = getAvatarUrl(profile.data.avatar_url)

  return (
    <>
      <HomeHeader avatar={avatarURL}/>
      <AccountForm user={user} profile={profile}/>
    </>
  )
}