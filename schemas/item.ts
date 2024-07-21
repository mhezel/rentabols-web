import mongoose, { model, models, Schema } from "mongoose";
import { Item } from "./types";

const ItemSchema = new Schema<Item>({
    _id: String,
    name: String,
    hostid: { 
        type: mongoose.Types.ObjectId, 
        ref: "User",
        default: null,
    },
    price: {
        daily: Number,
        hourly: Number
    },
    photos: [String],
    description: String,
    status: String,
    category: String,
    numberOfBookings: Number,
},{
    timestamps: true
})

export const ItemModel = models.Item || model("Item", ItemSchema)
