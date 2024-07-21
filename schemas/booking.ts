import mongoose, { model, models, Schema } from "mongoose";
import { Booking, BookingStatus } from "./types";

const BookingSchema = new Schema<Booking>({
    itemid: {
        type: mongoose.Types.ObjectId,
        ref: "Item",
        default: null,
    },
    guestid: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null,
    },
    rentstart: Date,
    duration: Number,       //num of days or hours
    durationtype: String,   //hourly or daily
    amount: Number,
    comment: String,
    rating: {
        type: Number,
        default: 0
    },                      //star-rating out of 5
    stripeid: String,
    status: {
        type: String, 
        default: BookingStatus.PENDING
    },                      //pending / rented / returned
},{
    timestamps: true
})

export const BookingModel = models.Booking || model("Item", BookingSchema)
