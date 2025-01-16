import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
     })

     res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS 7days
        httpOnly: true, // prevents XSS Attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
     })

     return token;
}