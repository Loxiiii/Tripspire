import { createTrip } from "@/utils/helpers/trips/clientController";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request, response) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ message: 'You must be logged in to create a trip' })
  } else {
    const { title, description, numberOfDays, tags, thumbnail_url } = request.body;
    const user_id = user.id;
    try {
      await createTrip(title, description, user_id, numberOfDays, tags, thumbnail_url);
      return NextResponse.json({ message: 'Trip created successfully' })
    } catch (error) {
      return NextResponse.json({ message: 'Error creating a trip' })
    }

  }

}