import Image from 'next/image'
import Link from 'next/link'
import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CarouselItemWrapper({ source, title, description, price}) {
  return (
    <CarouselItem className="md:basis-1/3 lg:basis-1/3 rounded-t-md mt-3">
      <div className="p-1">
        <Card>
          <Link className="block" href="#">
            <Image
              alt="Mountain retreat"
              className="aspect-video overflow-hidden object-cover rounded-t-md"
              height={400}
              src={source}
              width={600} />
          </Link>
          <CardHeader className="p-4 sm:p-6 flex flex-col">
            <CardTitle className="text-xl font-semibold line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {description}
            </CardDescription>
            <CardDescription className="font-semibold text-gray-900 dark:text-gray-100">
              {price}
              <span className="text-sm text-gray-500 dark:text-gray-400">/ night</span>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </CarouselItem>
  )
} 