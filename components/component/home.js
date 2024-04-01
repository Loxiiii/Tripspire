import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import SearchDestinationForm from "./searchDestinationForm"
import HomeHeader from '@/components/component/homeHeader.js'
import Footer from './footer.js'
import moodyCabin from '@/public/moodyCabin.jpg'
import beachfrontParadise from '@/public/beachfrontParadise.jpg'
import urbanLoft from '@/public/urbanLoft.jpg'
import CarouselItemWrapper from "./carouselItemWrapper"
import { createClient, getAvatarUrl } from '@/utils/supabase/server.js'

export async function Home() {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser()
  console.log('the user is: ', user)
  let { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()
  console.log('the profiles are: ', profiles)
  let avatarName = profiles.avatar_url
  console.log('the avatar name is: ', avatarName)
  let avatarUrl = getAvatarUrl(avatarName)
  console.log('the avatar url is: ', avatarUrl)

  return (
    (<div className="mx-auto max-w-7xl flex flex-col min-h-screen">
      <HomeHeader avatar={avatarUrl}/>
      <main className="flex-1 w-full mt-20">
        <div className="py-10 flex flex-col gap-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight">Find your next adventure</h1>
            <p className="text-gray-500 dark:text-gray-400">Discover the most authentic attractions</p>
          </div>
          <div className="mx-auto max-w-5xl">
            <SearchDestinationForm />
          </div>
        </div>
        <Carousel opts={{ align: "start", }} className="w-full">
          <CarouselContent>
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />
            <CarouselItemWrapper source={urbanLoft} 
              title={"Stylish Urban Loft in the Heart of the City"}
              description={"Chic and modern apartment. Perfect for exploring the city's vibrant culture."}
              price={"$280"} />
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />    
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel opts={{ align: "start", }} className="w-full">
          <CarouselContent>
            <CarouselItemWrapper source={urbanLoft} 
              title={"Stylish Urban Loft in the Heart of the City"}
              description={"Chic and modern apartment. Perfect for exploring the city's vibrant culture."}
              price={"$280"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />    
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel opts={{ align: "start", }} className="w-full">
          <CarouselContent>
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />
            <CarouselItemWrapper source={urbanLoft} 
              title={"Stylish Urban Loft in the Heart of the City"}
              description={"Chic and modern apartment. Perfect for exploring the city's vibrant culture."}
              price={"$280"} />
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />    
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel opts={{ align: "start", }} className="w-full">
          <CarouselContent>
            <CarouselItemWrapper source={urbanLoft} 
              title={"Stylish Urban Loft in the Heart of the City"}
              description={"Chic and modern apartment. Perfect for exploring the city's vibrant culture."}
              price={"$280"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={moodyCabin} 
              title={"Cozy and Charming Mountain Retreat with Hot Tub"}
              description={"Perfect for a weekend getaway. Enjoy the stunning mountain views from the comfort of your home."}
              price={"$300"} />
            <CarouselItemWrapper source={beachfrontParadise} 
              title={"Beachfront Paradise - Stunning Views and Private Access"}
              description={"Immaculate beach house with panoramic ocean views. Your private paradise steps away from the shore."}
              price={"$455"} />    
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <Footer />
    </div>)
  );
}
