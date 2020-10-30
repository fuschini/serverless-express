import serverless from 'serverless-http'
import express from 'express'
import bodyParser from 'body-parser'
import 'reflect-metadata'
import cors from 'cors'

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(cors())

// Routes


export const handler: serverless.Handler = serverless(app)
