import { Permission } from "node-appwrite";
import {databases, storage} from "./config";
import { db, questionAttachmentBucket } from "@/name";

export default async function getOrCreateStorage(){
    try {
        await storage.getBucket(questionAttachmentBucket);
        console.log("Storage connected")
    } catch (error) {
        try {
            await storage.createBucket(questionAttachmentBucket,questionAttachmentBucket,
                [
                    Permission.read("users"),
                    Permission.read("any"),
                    Permission.create("users"),
                    Permission.update("users"),
                    Permission.delete("users")
                ],
                false,
                undefined,
                undefined,
                ["jpg","png","gif","jpeg","webp","heic"]
            );
            console.log("Storage created");
            console.log("Storage connected");
        } catch (error) {
            console.log("Error creating storage",error);
        }
    }
}