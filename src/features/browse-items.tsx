import SectionHeadline from '@/_components/section-headline'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BrowseItems() {
  return (
    <section className="py-2 sm:py-16">
      <SectionHeadline styles="py-12" title="Looking to rent? Browse items"/>
      <div className="flex flex-col sm:flex-row gap-4">
        <Card className='flex flex-col items-center hover:shadow-md'>
          <CardHeader>
            <CardTitle>Camera Gear</CardTitle>
          </CardHeader>
          <CardContent>
            <Image alt='camera-gear' src="/rent-camera-gear.jpg"
            width={200} height={100}/>
          </CardContent>
          <CardFooter>
            <Link href="#">Browse &rarr;</Link>
          </CardFooter>
        </Card>
        <Card className='flex flex-col items-center hover:shadow-md'>
          <CardHeader>
            <CardTitle>Power Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <Image alt='camera-gear' src="/rent-power-tools.jpg"
            width={200} height={100}/>
          </CardContent>
          <CardFooter>
            <Link href="#">Browse &rarr;</Link>
          </CardFooter>
        </Card>
        <Card className='flex flex-col items-center hover:shadow-md'>
          <CardHeader>
            <CardTitle>House Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <Image alt='camera-gear' src="/rent-house-tools.jpg"
            width={200} height={100}/>
          </CardContent>
          <CardFooter>
            <Link href="#">Browse &rarr;</Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default BrowseItems