import { Document } from "mongoose";

export interface Item extends Document {
    _id: string;
    name: string,
    hostid? : string,
    price: Price,
    photos: string[],
    description: string,
    status: string,
    category: string,
    numberOfBookings?: number,
}

export interface Booking extends Document {
    itemid?: string,
    guestid?: string,
    rentstart: Date,
    duration: number,       //num of days or hours
    durationtype: string,   //hourly or daily
    amount: number,
    comment: string,
    rating: number,         //star-rating out of 5
    stripeid?: string,
    status: BookingStatus,  //pending / rented / returned
}

export enum BookingStatus {
    PENDING = "PENDING",
    RENTED = "RENTED",
    RETURNED = "RETURNED",
    CANCELLED = "CANCELLED"
}

export type Price = {
    daily: number,
    hourly: number,
}

export type User = {
    id: string,
    name: string,
    email: string,
    emailVerified: Date,
    phone: string,
    image: string,
}