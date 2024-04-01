import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div className="flex h-full min-h-screen border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex-1 flex flex-col w-full max-w-4xl min-h-0 mx-auto">
        <div className="flex h-14 items-center px-4 border-b md:px-6">
          <Link className="flex items-center gap-2 text-xl font-semibold" href="#">
            <PackageIcon className="w-6 h-6" />
            <span>Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto py-4 md:py-6">
          <nav className="grid gap-px">
            <Collapsible>
              <CollapsibleTrigger>
                <div className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40">
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Home
                  <span className="flex-1" />
                  <ChevronRightIcon className="w-4 h-4 transition-all" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-px">
                <Link
                  className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
                  href="#"
                >
                  <PackageIcon className="w-4 h-4 mr-2" />
                  Products
                </Link>
                <Link
                  className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
                  href="#"
                >
                  <UsersIcon className="w-4 h-4 mr-2" />
                  Users
                </Link>
                <Link
                  className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
                  href="#"
                >
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
              href="#"
            >
              <PackageIcon className="w-4 h-4 mr-2" />
              Products
            </Link>
            <Link
              className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
              href="#"
            >
              <UsersIcon className="w-4 h-4 mr-2" />
              Users
            </Link>
            <Collapsible>
              <CollapsibleTrigger>
                <div className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40">
                  <ChevronsRightIcon className="w-4 h-4 mr-2" />
                  Billing
                  <span className="flex-1" />
                  <ChevronRightIcon className="w-4 h-4 transition-all" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-px">
                <Link
                  className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
                  href="#"
                >
                  <CreditCardIcon className="w-4 h-4 mr-2" />
                  Payment Methods
                </Link>
                <Link
                  className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
                  href="#"
                >
                  <ReceiptIcon className="w-4 h-4 mr-2" />
                  Invoices
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              className="flex h-10 items-center px-4 rounded-md hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
              href="#"
            >
              <SettingsIcon className="w-4 h-4 mr-2" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function ChevronsRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ReceiptIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17V7" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
