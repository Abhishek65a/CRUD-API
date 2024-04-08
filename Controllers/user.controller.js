import User from "../Model/user.model.js"


//to add the user details with blog post (Create method)
export const create =  async(req,res)=>{
    try {

        const userData= new User(req.body);
        const {email}=userData;
        const userExist=await User.findOne({email})

        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }
        const saveduser = await userData.save();
        res.status(200).json(saveduser)

    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}

//to display all the user details and blog post details (read method)
export const fetch=async (req,res)=>{
    try {
            const users = await User.find();
            if(users.length===0){
                return res.status(404).json({message:"User not found"})
            }
            res.status(200).json(users)


    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}



//to update the user details and blog post details(update method)

export const update=async(req,res)=>{
    try {
            const id=req.params.id;
            const userExist=await User.findOne({_id:id})

            if(!userExist){
                return res.status(404).json({message:"User not found!"})
            }
            const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
            res.status(201).json(updateUser);


    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }   
}

//to delete the user details and blog post (delete method)

export const deleteUser = async(req,res)=>{
    try {

        const id=req.params.id;
        const userExist=await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message:"User not found!"})
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message:"User deleted Successfully"})
        
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}