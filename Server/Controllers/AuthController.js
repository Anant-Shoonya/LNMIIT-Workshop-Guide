import userModel from "../Models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message : 'User already exists, please login to proceed', success: false});
        }
        const useModel = new userModel({name, email, password});
        useModel.password = await bcrypt.hash(password, 10);
        await useModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch(err){
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        const errorMsg = 'Authentication failed, email or password is wrong';
        if(!user){
            return res.status(403)
                .json({message : errorMsg, success: false});
        }
        const isPassEqual1 = await bcrypt.compare(password, user.password);
        if(!isPassEqual1){
            return res.status(403)
                .json({message : errorMsg, success: false});
        }
        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )
        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch(err){
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}

export  {signup, login};

