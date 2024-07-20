"use client"

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'

function SignInButton() {
  return (
    <Button
    className='px-0'
    variant="ghost"
    onClick={() => signIn()}>Sign in
    </Button>
  )
}

export default SignInButton