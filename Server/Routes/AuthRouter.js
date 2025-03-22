import express from "express";
const router = express.Router();
import {signupValidation, loginValidation} from '../Middlewares/AuthValidaion.js';
import {login, signup} from "../Controllers/AuthController.js";

router.post('/login', loginValidation, login)

router.post('/signup', signupValidation, signup)

export  default router;