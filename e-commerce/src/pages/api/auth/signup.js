import { saveUser,updatedPass } from "@/src/services/users";

export default async function handler(req,res){
    if(req.method === "POST"){
        const details = req.body
        try{
            saveUser(details);
            res.status(201).send();
        }catch(err){
            console.log("err");
            res.status(400).send();
        }
    }
    if(req.method === "PATCH"){
        const details = req.body;
        try{
            await updatedPass(details)
             res.status(201).send();
        }catch(err){
            res.status(400).json({message:err});
        }
    }
    return res.status(404).send();
}