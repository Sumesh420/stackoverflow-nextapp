import { databases } from "./config";
import { db } from "@/name";
import createQuestionCollection from "./question.collection";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrCreateDB(){
    try {
        await databases.get(db);
        console.log("Database connected");
    } catch (error) {
        try {
            await databases.create(db,db);
            console.log("Database created");
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
            ]);
            console.log("Collections created");
        } catch (error) {
            console.log("Error creating database or collection",error)
        }
    };
    return databases;
}