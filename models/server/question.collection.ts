import { db,questionCollection } from "@/name";
import { databases } from "./config";
import { IndexType, Permission } from "node-appwrite";

export default async function createQuestionCollection(){
    try {
        await databases.createCollection(db,questionCollection,questionCollection,
            [
                Permission.read("any"),
                Permission.read("users"),
                Permission.create("users"),
                Permission.update("users"),
                Permission.delete("users")
            ]
        );
        console.log("Question collection created")
        await Promise.all([
            databases.createStringAttribute(db,questionCollection,"title",100,true),
            databases.createStringAttribute(db,questionCollection,"content",10000,true),
            databases.createStringAttribute(db,questionCollection,"authorId",50,true),
            databases.createStringAttribute(db,questionCollection,"tags",50,true,undefined,true)
        ]);
        console.log("Question collection attributes created");
        // await Promise.all([
        //     databases.createIndex(db,questionCollection,"title",IndexType.Fulltext,["title"],["asc"]),
        //     databases.createIndex(db,questionCollection,"content",IndexType.Fulltext,["content"],["asc"])
        // ])
    } catch (error) {
        console.log("Something went wrong in creating Question Collection")
    }
}