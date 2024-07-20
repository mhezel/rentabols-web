"use client"

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

function SignOutButton() {
  return (
    <Button
    className='px-0'
    onClick={() => signOut()}
    variant="ghost">Sign out
    </Button>
  )
}

export default SignOutButton