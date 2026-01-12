import { Router } from "express";
import { User } from "../models/userModel.js";
import { sequelize } from "../index.js";
import bcrypt from "bcrypt"

const router = Router();

router.get('/', async (request, response) => {
    try {
        const users = await User.findAll({
            attributes: ["id", "fullName", "created_at"]
        });
        return response.json({ users });
    } catch (error) {
        console.error("Something went wrong:", error);
        return response.status(500).json({ message: "Internal server error" });
    }
});

router.post('/', async (request, response) => {
    const transaction = await sequelize.transaction();
    try {
        let data = request.body;
        if(!data.email || !data.password || !data.fullName) {
            return response.status(400).json({ message: "Missing required fields"})
        }

        const userExist = await User.findOne({
            where: {
                email: data.email
            },
            transaction
        })

        if (userExist) {
            await transaction.rollback();
            return response.status(409).json({ message: "User already exists"})
        }

        //Hashing of the password
        const newUser = await User.create({
            fullName: data.fullName,
            email: data.email,
            password: data.password
        }, { transaction })

        await transaction.commit();
        return response.status(201).json({ success: true, data: {
            userId: newUser.id, 
            email: newUser.email
        }});

    } catch (error) {
        await transaction.rollback();
        console.error("Error creating user:", error);
        return response.status(500).json({
            message: "An error has ocurred during user creation:", error
        })
    }

})
export default router;