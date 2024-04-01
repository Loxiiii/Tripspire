import Link from 'next/link';
import MountainIcon from '@/components/component/mountainicon'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import DropdownMenuWrapper from '@/components/component/dropdownMenu'


export default function HomeHeader({ avatar }) {

  const menuItemsAvatar = [{text: 'Saved trips', color: 'white', href:'/account', function: false},
    {text:'My trips', color: 'white', href:'/account', function: false},
    {text:'Account', color: 'white', href:'/account', function: false},
    {text:'Sign Out', color: 'red', href:'/auth/signout', function: true},
  ]
  
  const triggerAvatar = (
    <Avatar>
      <AvatarImage src={avatar} alt="@shadcn" />
      {/* <AvatarImage src={'https://kgoazdpjnwigqasganef.supabase.co/storage/v1/object/public/avatars/61714955-7c81-4b62-b239-9719f672d78c-0.8700866049312799.jfif'} alt="@shadcn" />  */}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
  return (
    <div className='fixed inset-x-0  z-10 bg-opacity-50 backdrop-blur-xl w-full'>
      <header className="pt-2 px-4 flex items-center justify-between h-14 mx-auto max-w-7xl">
            <div>
              <Link className="flex items-center justify-center" href="#">
                <MountainIcon className="h-7 w-7" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </div>
            <nav className="hidden md:flex gap-6 space-x-6 fixed inset-x-0 items-center justify-center">
                <Link className="font-semibold" href="/home">
                  Home
                </Link>
                <Link className="font-medium" href="#">
                  Explore
                </Link>
                <Link className="font-medium" href="#">
                  Bookings
                </Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="border rounded-full w-10 h-10 overflow-hidden mr-2">
              {/* <Dropdown>
                <DropdownTrigger>
                  <Avatar>
                    <AvatarImage src={avatar} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
              <DropdownMenuWrapper trigger={triggerAvatar} items={menuItemsAvatar}/>
                {/* <Link href="/account">
                  <Avatar>
                    <AvatarImage src={avatar} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link > */}
                
              </div>
              <Button size="sm" variant="outline">
                Become a tripper
              </Button>
            </div>
        </header>
    </div>
  )
}