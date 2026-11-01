import express from "express"
import runGraph from "./ai/graph.ai.js"
import { success } from "zod"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// app.get("/", async (req, res) => {
//     const result = await runGraph("")

//     res.json(result)
// })

app.post("/invoke", async(req,res)=>{
    const { problem } = req.body

    const result = await runGraph(problem)

    res.status(201).json({
        message: "data loaded",
        result,
        success: true
    })

})

export default app