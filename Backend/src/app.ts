import express from "express"
import runGraph from "./ai/graph.ai.js"
import { success } from "zod"

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
    const result = await runGraph("what is the capital of India")

    res.json(result)
})

app.post("/invoke", async(req,res)=>{
    const { input } = req.body

    const result = await runGraph(input)

    res.status(201).json({
        message: "data loaded",
        result,
        success: true
    })

})

export default app