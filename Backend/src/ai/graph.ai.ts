import { StateSchema, MessagesValue,ReducedValue , StateGraph, START, END, type GraphNode } from "@langchain/langgraph";
import z from "zod"
import { cohoreModel, geminiModel, mistralModel } from "./model.ai.js";
import { createAgent, HumanMessage, providerStrategy, toolStrategy } from "langchain";

const state = new StateSchema({
    problem: z.string().default(""),
    solution_1: z.string("").default(""),
    solution_2: z.string("").default(""),
    judge: z.object({
        solution_1_score: z.number().default(0),
        solution_2_score: z.number().default(0),
        solution_1_reasoning: z.string("").default(""),
        solution_2_reasoning: z.string("").default(""),
    })
})

const solutionNode: GraphNode<typeof state> = async(state)=>{

    console.log("STATE.PROBLEM INSIDE SOLUTION NODE:", state.problem)

    const [mistralResponse, cohoreResponse] = await Promise.all([
        mistralModel.invoke(state.problem),
        cohoreModel.invoke(state.problem)
    ])

    return {
        solution_1: mistralResponse.text,
        solution_2: cohoreResponse.text
    }
}

const judgeNode: GraphNode<typeof state> = async(state)=>{

   const { problem, solution_1, solution_2 } = state  // state me se ye 3 chize nikali h

   const judge = createAgent({
    model: geminiModel,
    responseFormat: providerStrategy(z.object({
        solution_1_score: z.number().default(0),
        solution_2_score: z.number().default(0),
        solution_1_reasoning: z.string("").default(""),
        solution_2_reasoning: z.string("").default(""),
    })),
    systemPrompt: `You are a judge who is given a problem and two solutions.
        You have to evaluate the solutions based on their correctness, efficiency, and clarity. 
        You will provide scores for each solution and reasoning for your scores.`,
   })

    const judgeResponse = await judge.invoke({
        messages: [
            new HumanMessage(`
                Problem: ${problem}
                Solution 1: ${solution_1}
                Solution 2: ${solution_2}
                Please provide your scores and reasoning in the following format:`)
        ]
    })
    
    // ye 4 chize h jo mujhe chahiye jo data ko structured way me provide krega
    const {   
        solution_1_score, 
        solution_2_score, 
        solution_1_reasoning, 
        solution_2_reasoning 
    } = judgeResponse.structuredResponse

    return {
        judge: {
            solution_1_score,
            solution_2_score,
            solution_1_reasoning,
            solution_2_reasoning
        }
    }   
}

const graph = new StateGraph(state)
    .addNode("solution", solutionNode)
    .addNode("judge_node", judgeNode)
    .addEdge(START, "solution")
    .addEdge("solution", "judge_node")
    .addEdge("judge_node", END)
    .compile()

export default async function runGraph(problem: string){
    const result = await graph.invoke({
        problem: problem
    })

    console.log(result)
    return result
}

/**
 * jab mujhe data ek formate me chaiye hota h to ham vha pr ek agent create krte h
 * ab yhi agent mujhe data ek structured way me provide krega
*/