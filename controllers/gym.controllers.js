import Gym from "../models/gym.models.js"

export const getAll = async (req,res) => {
    try {
        const newGym = await Gym.find();
        console.log(newGym)
        res.status(201).json({
            msg:"Data Found Successfull",
            newGym
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error :",
            error
        })
    }
}
export const createAll = async (req,res) => {
    const {gymToolsImage,gymToolsPrice,gymToolsName,gymToolsRatings} =req.body
    try {
        const newGym =  new Gym({gymToolsImage,gymToolsPrice,gymToolsName,gymToolsRatings} );
        await newGym.save()
        console.log(newGym)
        res.status(201).json({
            msg:"Data Created Successfull",
            newGym
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error :",
            error
        })
    }
}
export const deleteAll = async (req,res) => {
    try {
        const newGym = await Gym.deleteMany();
        console.log(newGym)
        res.status(201).json({
            msg:"Data ALl Deleted Successfull",
            newGym
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error :",
            error
        })
    }
}
export const deleteOne = async (req,res) => {
    const {id}=req.params
    try {
        const newGym = await Gym.findByIdAndDelete();
        console.log(newGym)
        res.status(201).json({
            msg:"Data One Successfull",
            newGym
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error :",
            error
        })
    }
}
export const updateGym = async (req,res) => {
    const {id}=req.params
    const {gymToolsImage,gymToolsPrice,gymToolsName,gymToolsRatings}=req.body
    try {
        const newGym = await Gym.findByIdAndUpdate(id,{gymToolsImage,gymToolsPrice,gymToolsName,gymToolsRatings},{new:true});
        console.log(newGym)
        res.status(201).json({
            msg:"Data Updated Successfull",
            newGym
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error :",
            error
        })
    }
}
