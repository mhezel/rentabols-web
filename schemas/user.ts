import { model, models, Schema } from "mongoose";
import { User } from "./types";

const userSchema = new Schema<User> ({
    id: String,
    name: String,
    email: String,
    emailVerified: Date,
    phone: String,
    image: String,
}, {
    timestamps: true,
})

export const UserModel = models.User || model('User', userSchema)