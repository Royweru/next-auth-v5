"use server"

import { RegisterSchema } from '@/schemas'
import * as z from 'zod'
import bcrypt from 'bcrypt'

import db from "@/lib/db"
export const register=async(values:z.infer< typeof RegisterSchema>)=>{
   const validatedFields =RegisterSchema.safeParse(values)

   if(!validatedFields.success){
    return {error:"Invalid fields!"}
   }

   const {
    email,
    password,
    name
   } = validatedFields.data

   const hashedPwd = await bcrypt.hash(password,12)

   const existingUser = await db.user.findUnique({
    where:{
        email,
    }
   })

   if(existingUser){
    return {error:"Email already in use!"}
   }
   await db.user.create({
    data:{
        name,
        email,
        password:hashedPwd
    }
   })
 return {success:"User Created!"}

}