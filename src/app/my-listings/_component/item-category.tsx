"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export const itemCategories = [
    {
        display: 'Camera gear',
        name: 'camera-gear'
    },
    {
        display: 'Power tools',
        name: 'power-tools'
    },
    {
        display: 'House tools',
        name: 'house-gear'
    }
]
  
const FormSchema = z.object({
    itemcategory: z.string().min(1, {
        message: "Item category is required"
    })
})

type ItemCategoryInput = z.infer<typeof FormSchema>

function ItemCategory({
    onNext,
    onPrev,
}:{
    onNext: () => void,
    onPrev?: () => void,
}) {

    const form = useForm<ItemCategoryInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            itemcategory: ''
        }
    })

    function onSubmit(data: ItemCategoryInput){
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Item category</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                    control={form.control}
                    name='itemcategory'
                    render={({ field }) => (
                        <>
                        <FormItem>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an item category"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        itemCategories.map((item) => (
                                            <SelectItem key={item.name} value={item.name}>{item.display}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </FormItem>
                        <FormMessage/>
                        </>
                    )}>
                </FormField>
                <div className="flex justify-between items-center py-4">
                    <Button variant="ghost"onClick={onPrev}>Prev</Button>
                    <Button type="submit" variant="ghost">Next</Button>
                </div>
                </form>
            </Form>
        </div>

    )
 
}

export default ItemCategory