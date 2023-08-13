import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req:Request, res: Response) => {

    try{
        const result = await UserService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "User Created successfully",
            data: result
        })
    }
    catch(err){
        res.send(err);
    }
}

const insertOrUpdateProfile = async(req:Request, res: Response) =>{
    try{
        const result = await UserService.insertOrUpdateProfile(req.body);
        res.send({
            success: true,
            message: "User Created successfully",
            data: result
        })
    }
    catch(err){
        res.send(err);
    }
}

const getUsers = async(req:Request, res: Response) =>{
    try{
        const result = await UserService.getUsers();
        res.send({
            success: true,
            message: "All Users retieved successfully",
            data: result
        })
    }
    catch(err){
        res.send(err);
    }
}

const getSingleUser = async(req:Request, res: Response) =>{
    try{
        const result = await UserService.getSingleUser(parseInt(req.params.id));
        res.send({
            success: true,
            message: "User retieved successfully",
            data: result
        })
    }
    catch(err){
        res.send(err);
    }
}

export const UserController ={
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}