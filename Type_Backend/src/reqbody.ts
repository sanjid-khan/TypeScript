// import { Request, Response } from "express";

import { type Request, type Response } from "express";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}


export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response
) => {
  const { username, email, password } = req.body;

  res.json({
    success: true,
    message: "User registered",
  });
};