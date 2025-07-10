import chalk from 'chalk';
import argon2 from 'argon2'
import { db } from "./Database/dbase/dbs.js";
import { usersTable } from './Database/dbase/schema.js';

import { eq } from 'drizzle-orm';



//TODO: findUserByEmail

export const findUserByEmail = async (email)=>{
    try{
        const [info]= await db.select().from(usersTable).where(
            eq(usersTable.email,email)
        )
        
        return info
    }catch(err){
        console.error(chalk.red(`Error while searching email in database!:`),err)
    }
}


//TODO: savingUserData


export const savingUserData  = async (data)=>{
    try{
        const info= await db.insert(usersTable).values(data)
        
        if (!info) throw new Error({message:`Something went wrong! Can't save user's data!`});

        return info
    }catch(err){
        console.error(chalk.red(`Error while saving user's data in database!: ${err.message}`))
    }
}


//TODO: 


















//! Password Hashing & Password Verifying 


export const hashPassword = async (password)=>{
   
    try{
        return await argon2.hash(password)
    }catch(err){
        console.error(chalk.greenBright(`Error while hashing password!: ${err}`))
    }
}



export const verifyPassword = async (hashedPassword,password )=>{
    try{
        return await argon2.verify(hashedPassword,password)
    }catch(err){
        console.error(chalk.greenBright(`Error while verify password!: ${err}`))
    }
}


































