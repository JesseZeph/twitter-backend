import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient();

//create user
router.post("/", async (req, res) => {
    try {
        const { email, name, username } = req.body;

        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "Hello, I'm new on Twitter",
            }
        });
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Email and Username must be unique"});     
    }

});

// list users
router.get("/", async (req, res) => {
    const allUser = await prisma.user.findMany();
    res.json(allUser)
})

//get one user
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    const user = await prisma.user.findUnique({ where: {id: Number(id)}})
    res.json(user)
})


//update user
router.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {bio, name, image, username} = req.body;

    try {
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data: {bio, name, image, username }
        });
        res.json(result)
    } catch (error) {
        res.status(501).json({error: "Not implemented"})
    }
})

//delete user
router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    await prisma.user.delete({
        where: { id: Number(id)}
    })
    res.sendStatus(200)
})
export default router;