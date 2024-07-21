import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SignOutButton from '@/_components/sign-out-button'
import SignInButton from '@/_components/sign-in-button'

async function HeaderHost() {

  //make sure user is logged-in to view this
  const session = await getServerSession(authOptions);

  return (
    <header>
        <nav className="bg-primary flex items-center justify-between p-4 lg:px-8">
        {/*logo*/}
            <div className="flex flex-1">
            <Link href="/">
            <span className='sr-only'>Logo</span>
            <Image width={40} height={40} className='w-auto h-auto' src='/logo.png' alt='rentabols-logo'/>
            </Link>
            </div>
        {/*menu*/}
        <div className="flex flex-1 space-x-4">
            <Link href="/booked-items" className='hidden md:flex md:font-bold'>Booked Items</Link>
            <Link href="/my-listings" className='hidden md:flex md:font-bold'>My Listings</Link>
        </div>
        {/*side-menu*/}
        <div className="flex items-center">
            <Link href="/profile" className={cn(buttonVariants({variant: "outline"}),'shadow hidden md:flex md:mr-2')}>Switch to Guest</Link>
        </div>
             {/*drop-down*/}
             <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex text-slate-500">
                        <Menu/>
                        {session?.user  && 
                            <span>Welcome, {session.user.name?.split(' ')[0]}!</span>
                        }
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="flex md:hidden">
                        <Link className="text-primary font-bold" 
                        href="/">Switch to guest
                        </Link>
                    </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem className='flex lg:hidden'> 
                        <Link className="flex md:hidden" 
                        href="/booked-items">Booked Items</Link>  
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex lg:hidden'> 
                        <Link className="flex md:hidden" 
                        href="/my-listings">My Listings</Link>  
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex text-left py-0'>
                            {session?.user ? 
                                <SignOutButton/> : <SignInButton/>
                            }
                    </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    </header>
  )
}

export default HeaderHost