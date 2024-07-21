import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import ListYourItemComponent from './_component/list-your-item-component'
  

function MyListingsPage() {

const myListings = []

  return (
    <>
    <h1 className='text-2xl sm:text-4xl py-8 font-bold'>{myListings.length} Listings</h1>
    
    {/*Dialog for adding items*/}
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline"><PlusIcon className='mr-4 h-4 w-4'/>Add Item</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add New Listing</DialogTitle>
            </DialogHeader>
            <ListYourItemComponent/>
        </DialogContent>
    </Dialog>

    <div className="grid grid-col-1 sm:grid-cols-3 gap-2 sm:gap-4 py-8">
        {
            myListings.length > 0 ? <div>Listings</div>
            : <p className='text-xl font-light p-4'>No Listings</p>
        }
    </div>
    
    </>
  )
}

export default MyListingsPage