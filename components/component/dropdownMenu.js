'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { signOutClient } from '@/utils/supabase/client'

// takes a jsx element as a trigger, and an array of menu items
export default function DropdownMenuWrapper({ trigger, items }) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await fetch('/auth/signout', {
        method: 'POST',
        // Optionally, you can include headers, body, etc.
      });
      if (response.ok) {
        // Redirect to another page after successful sign-out
        // router.push('/'); // Example: Redirect to home page
      } else {
        // Handle errors if necessary
        console.error('Sign-out failed:', response.statusText);
      }
    } catch (error) {
      console.error('Sign-out failed:', error);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        {trigger}
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {items.map(item => {
          if (!item.function) {
            if (item.color === 'white') {
              return (
                // <Link key={item.key} href={item.href}>
                  <DropdownItem onClick={() => router.push(item.href)} key={item.key}>{item.text}</DropdownItem> 
                // {/* </Link> */}
              )       
            } else {
              return (
                // <Link key={item.key} href={item.href}>
                  <DropdownItem onClick={() => router.push(item.href)} key={item.key} className="text-danger" color="danger">{item.text}</DropdownItem>
                // {/* </Link> */}
              )
            }
          } else { // in case it is a function
            if (item.color === 'white') {
              return (
                // <Link key={item.key} href={item.href}>
                  <DropdownItem onClick={() => {
                    signOutClient();
                    router.push('/');
                  }} key={item.key}>{item.text}</DropdownItem> 
                // {/* </Link> */}
              )       
            } else {
              return (
                // <Link key={item.key} href={item.href}>
                <DropdownItem onClick={() => {
                  signOutClient();
                  router.push('/');
                }} key={item.key} className="text-danger" color="danger">{item.text}</DropdownItem>
                // {/* </Link> */}
              )
            }
          }
        })}
      </DropdownMenu>
    </Dropdown>
  )
}
