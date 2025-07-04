import express, { Router } from "express";
import {
  SigninController,
  SignupController,
} from "../controller/authController";
const userRouter: Router = Router();

userRouter.post("/signup", SignupController);
userRouter.post("/signin", SigninController);

export default userRouter