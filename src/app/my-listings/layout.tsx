import HeaderHost from '@/_components/header-host'
import MaxWContainer from '@/_components/max-w-container'
import React, { ReactNode } from 'react'

function MyListingsLayout({
    children,
} : {
    children: ReactNode
}) {
  return (
    <>
    <HeaderHost/>
    <MaxWContainer classes='py-32'>
        {children}
    </MaxWContainer>
    </>
  )
}

export default MyListingsLayout