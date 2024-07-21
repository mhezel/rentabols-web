import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignOutButton from '@/_components/sign-out-button'
import SignInButton from '@/_components/sign-in-button'


async function Header() {

  const session = await getServerSession(authOptions);

  return (
    <header className='fixed w-full z-50'>
        <nav className="bg-primary flex items-center justify-between p-4 lg:px-8">
            {/*logo*/}
            <div className="flex lg:flex-1">
                <Link href="/">
                    <span className='sr-only'>Logo</span>
                    <Image width={40} height={40} className='w-auto h-auto' src='/logo.png' alt='rentabols-logo'/>
                </Link>
            </div>

            <div className="flex items-center">
                <Link href={
                `${session ? "/my-listings" : "api/auth/signin"}`}
                className={cn(buttonVariants({variant: 'outline'}),
                "shadow hidden md:flex md: mr-2"
                )}
                >Switch to Host</Link>

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
                {session &&
                    <DropdownMenuItem>
                        <Link className="flex md:hidden" href={`${session ? '/my-listings' : 'api/auth/signin'}`}>
                            Switch to host
                        </Link>
                    </DropdownMenuItem>
                }
                {session && 
                    <>
                    <DropdownMenuItem>
                        <Link className="font-bold" href={`${session ? '/my-rented-items' : 'api/auth/signin'}`}>
                            Rented Items
                        </Link>
                    </DropdownMenuItem>
                     <DropdownMenuSeparator></DropdownMenuSeparator>
                     </>
                }
                <DropdownMenuItem className='flex text-left py-0'>
                        {session?.user ? 
                            <SignOutButton/> : <SignInButton/>
                        }
                </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem>
                    <Link href="#">How it works</Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>    
            </div>
        </nav>
    </header>
  )
}

export default Header