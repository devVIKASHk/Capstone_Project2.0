import { registrationValidation } from "../zodValidation/registrationValidation.js";

import { findUserByEmail, hashPassword, savingUserData, verifyPassword } from "../Model/authmodel.js";
import chalk from "chalk";



//TODO: registerUser

export const registerUser = async (req,res)=>{
    
    try{
        const userInfo = req.body;

        const  {data,error}= registrationValidation.safeParse(userInfo);
        
        if (error){
            //!400 - Bad Request
            return res.status(400).json({error:error.errors[0].message});
        }
        
        const isAnyDuplicateEmail = await findUserByEmail(data.email);

        if (isAnyDuplicateEmail){
            //!400 - Bad Request
            return res.status(400).json({error:`User already exists with this email!`});
        }
        const {name,email,password}= data;

        const hashedPassword = await hashPassword(password);

        const savingUserInfo = await savingUserData({name,email,password:hashedPassword});

        return res.status(200).json({
            message:`Welcome ${name.toLocaleUpperCase()}, You are registered successfully! `
        })


        
    }catch(err){
        console.error(chalk.yellowBright("Error in registerUser: "), err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



//TODO: loginUser

export const loginUser = async (req,res)=>{

    try{
        const loginInfo = req.body;
        const  {data,error}= registrationValidation.safeParse(loginInfo);
        
        if (error){
            //!400 - Bad Request
            return res.status(400).json({error:error.errors[0].message});
        }
        const {email,password}= data;
        const isEmailExist = await findUserByEmail(email);

        if (!isEmailExist){
            return res.status(400).json({error:`Invalid Credentials! Enter Valid Credentials.`})
        }
        const isPasswordCorrect = await verifyPassword(isEmailExist.password,password);

        if (!isPasswordCorrect){
            return res.status(400).json({error:`Invalid Credentials! Enter Valid Credentials.`})
        }


        return res.status(200).json(
            {message:`Hii ${isEmailExist.name}, Login Successfully!`}
        )
        
    }catch(err){
        console.error(chalk.yellowBright("Error in registerUser: "), err);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}