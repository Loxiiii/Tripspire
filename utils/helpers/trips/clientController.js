import { createClient } from '@/utils/supabase/client'

export const createTrip = async (title, user_id, description, numberOfDays, tags, thumbnail_url) => {
  const supabase = createClient();
  
  

  
  const { data, error } = await supabase
  .from('trips')
  .insert([
    { title, description, user_id, numberOfDays, thumbnail_url},
  ])
  .select()

  if (error) {
    console.log('Error creating a trip', error)
  } else {
    console.log('Trip created successfully', data)
  }
}