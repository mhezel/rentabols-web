"use client"

import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const FormSchema = z.object({
    hourly: z
    .coerce
    .number({ invalid_type_error: "Item price must be a number"})
    .positive({ message: "Item price must be positive"})
    .finite({ message: "Item price must be a valid amount"}),
    daily: z
    .coerce
    .number({ invalid_type_error: "Item price must be a number"})
    .positive({ message: "Item price must be positive"})
    .finite({ message: "Item price must be a valid amount"}),
})
type ItemPricingInput = z.infer<typeof FormSchema>

function ItemPricing({
    onNext,
    onPrev,
}:{
    onNext: () => void,
    onPrev?: () => void,
}) {

    const form = useForm<ItemPricingInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            hourly: 0,
            daily: 0,
        }
    })

    function onSubmit(data: ItemPricingInput){
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Item pricing</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                    control={form.control}
                    name='hourly'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hourly Pricing</FormLabel>
                            <FormControl>
                                <Input placeholder='e.g. 12' {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}>
                </FormField>
                <FormField 
                    control={form.control}
                    name='daily'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Daily Pricing</FormLabel>
                            <FormControl>
                                <Input placeholder='e.g. 12' {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}>
                </FormField>
                <div className="flex justify-between items-center py-4">
                    <Button variant="ghost" onClick={onPrev}>Prev</Button>
                    <Button type="submit" variant="ghost">Next</Button>
                </div>
                </form>
            </Form>
        </div>
    )
}

export default ItemPricing