import { Router } from "express";

const router = Router()

router.post("/", (req, res) => {
    res.status(501).json({error: "Not implemented"})
})
router.get("/", (req, res) => {
    res.status(501).json({error: "Not implemented"})
})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: "Not implemented"})
})


router.put("/:id", (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: "Not implemented"})
})

router.delete("/:id", (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: "Not implemented"})
})
export default router;