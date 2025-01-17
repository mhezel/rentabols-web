import { MongoClient } from "mongodb";
import mongoose, { Mongoose } from "mongoose";


if ( !process.env.MONGODB_URI ) {
    throw new Error('MONGODB_URI is not defined');
}

const uri = process.env.MONGODB_URI
type MongoClientType = MongoClient | mongoose.mongo.MongoClient
let client: MongoClientType

let globalWithMongo = global as typeof globalThis & {
    _mongooseClient? : Mongoose
}

export const clientPromise = async () => {
    await connectToDB()

    return Promise.resolve<MongoClientType>(client)
}

export const connectToDB = async () => {
    if ( process.env.NODE_ENV === "development" ) {
 
        if (!globalWithMongo._mongooseClient) {
            globalWithMongo._mongooseClient = await mongoose.connect(uri)
        }

        client = globalWithMongo._mongooseClient.connection.getClient()

    } else {
        let _client = await mongoose.connect(uri)
        client = _client.connection.getClient()
    }
}