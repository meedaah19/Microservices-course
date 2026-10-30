import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

});

export {router as signinRouter};