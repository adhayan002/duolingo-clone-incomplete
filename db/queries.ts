import { cache } from "react";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

import db from "@/db/drizzle"
import { userProgress,courses} from "@/db/schema"

export const getCourses=cache(async ()=>{
    const data=await db.query.courses.findMany();
    
    return data;
})

export const getUserProgress=cache(async ()=>{
    const {userId}=await auth();

    if(!userId){
        return null
    }

    const data=await db.query.userProgress.findFirst({
        where:eq(userProgress.userId,userId),
        with:{
            activeCourse:true,
        }
    })

    return data
})


export const getCourseById=cache(async (courseId:number)=>{
    const data=await db.query.courses.findFirst({
        where:eq(courses.id,courseId)
        //TODO: Populate Units and Lessons
    })

    return data
})