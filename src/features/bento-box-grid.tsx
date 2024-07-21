import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BentoBoxGrid() {
  return (
    <div className="h-screen w-full flex justify-center items-center p-6">
    <div className="grid grid-cols-10 grid-rows-4 h-full w-full gap-6">
        {/* Grid Item 1 */}
        <div className="col-span-4 row-span-3 bg-gray-100 shadow-xl rounded-3xl flex flex-col p-4">
            <Image src="/macbook.png" alt="Macbook Pro" width={400} height={200} className="mx-auto"/>
            <div className="flex flex-col flex-grow justify-center items-start p-4">
                <h2 className="text-xl font-semibold">MacBook Pro 13-inch</h2>
                <p className="mt-2 text-gray-600">Powerful and portable, perfect for work and play.</p>
                <span className="mt-2 text-green-500">Available</span>
                <span className="mt-2 text-lg font-bold">$50/day</span>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
                <Button variant="default">Rent Now</Button>
                <Button variant="secondary">View Details</Button>
            </div>
        </div>
        {/* Grid Item 2 */}
        <div className="col-span-3 xl:col-span-4 row-span-1 bg-gray-100 shadow-xl rounded-3xl flex flex-col justify-between p-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">We Now Accept Online Payments!</h2>
                <p className="text-gray-600 mt-4">Experience seamless and secure online payments with our new 
                <span className="inline-block align-middle">
                <Image src="/STRIPE.png" alt="stripe" width={120} height={60}/>
            </span> integration. Whether you&apos;re renting or lending, your transactions are safe with us.</p>
            </div>
        </div>
        {/* Grid Item 3 */}
        <div className="col-span-3 xl:col-span-2 row-span-1 bg-primary shadow-xl rounded-3xl flex flex-col justify-between p-4">
        </div>
        {/* Grid Item 4 */}
        <div className="col-span-3 row-span-2 bg-gray-100 shadow-xl rounded-xl flex flex-col p-4">
            <div className='w-full h-auto overflow-hidden'> 
            <Image src="/dji.png" alt="DJI Drone" className="rounded-t-xl mx-auto zoom-in-150" width={300} height={50} />
            </div>
            <div className="flex flex-col flex-grow justify-between p-4">
                    <h2 className="text-xl font-semibold">DJI Drone</h2>
                    <p className="mt-2 text-gray-600">Capture breathtaking aerial footage.</p>
                    <span className="mt-2 text-green-500">Available</span>
                    <span className="mt-2 text-lg font-bold">$40/day</span>
                <div className="flex justify-center space-x-2 mt-4">
                    <Button variant="default">Rent Now</Button>
                    <Button variant="secondary">View Details</Button>
                </div>
            </div>
        </div>
        {/* Grid Item 5 */}
        <div className="col-span-1 row-span-1 bg-gray-100 shadow-xl rounded-3xl flex flex-col justify-between p-4">
            <Image src="/guitar.png" width={300} height={300} alt="Electric Guitar" className="mx-auto"/>
            <h2 className="text-l font-semibold">Electric Guitar</h2>
        </div>
        {/* Grid Item 6 */}
        <div className="col-span-2 row-span-3 bg-gray-100 shadow-xl rounded-3xl flex flex-col justify-between p-4">
            <Image src="/guitar.png" alt="Electric Guitar" className="object-cover mx-auto" height={600} width={300}/>
            <div className="flex flex-col flex-grow justify-center items-start p-4">
                <h2 className="text-xl font-semibold">Electric Guitar</h2>
                <p className="mt-2 text-gray-600">Perfect for music enthusiasts.</p>
                <span className="mt-2 text-green-500">Available</span> {/* Availability Status */}
                <span className="mt-2 text-lg font-bold">$20/day</span> {/* Rental Price */}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                <Button variant="default">Rent Now</Button>
                <Button variant="secondary">View Details</Button>
            </div>
        </div>
        {/* Grid Item 7 */}
        <div className="col-span-1 row-span-1 bg-primary shadow-xl rounded-3xl flex flex-col justify-between p-4">
            <div className="py-4 my-auto">
              <Image src="/logo.png" alt='rentabols-logo' width={200} height={200}/>
            </div>
        </div>
        {/* Grid Item 8 */}
        <div className="col-span-2 row-span-1 bg-primary shadow-xl rounded-3xl flex flex-col justify-between p-4">
            <div className="py-4 my-auto">
                <h3 className="text-center text-xl sm:text-4xl px-2 py-4 sm:py-8">
                Ready to make money? <Link className="font-bold" href="#">Start now &rarr;</Link>
                </h3>
            </div>
        </div>
        {/* Grid Item 9 */}
        <div className="col-span-1 row-span-1 bg-gray-100 shadow-xl rounded-3xl flex flex-col justify-between p-4">
            <Image src="/guitar.png" width={300} height={300} alt="Electric Guitar" className="mx-auto"/>
            <h2 className="text-l font-semibold">Electric Guitar</h2>
        </div>
        {/* Grid Item 10 */}
        <div className="col-span-4 row-span-1 bg-primary shadow-xl rounded-3xl flex flex-col justify-between p-4">
            <div className="py-4 my-auto">
                <h3 className="text-center text-xl sm:text-4xl px-2 py-4 sm:py-8">
                Looking for an item? <Link className="font-bold" href="#">Check it now &rarr;</Link>
                </h3>
            </div>
        </div>
        {/* Grid Item 11 */}
        <div className="col-span-1 row-span-1 bg-gray-100 shadow-xl rounded-3xl flex flex-col justify-center p-4">
            <Image src="/bike.png" alt="Mountain Bike" className="mx-auto" width={300} height={300}/>
            <h2 className="text-l font-semibold">Mountain Bike</h2>
        </div>
    </div>
</div>
  )
}
export default BentoBoxGrid 