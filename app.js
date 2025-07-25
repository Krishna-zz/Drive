
const express = require('express')
const morgan = require('morgan')
const userRouter = require('./routes/user.routes')
const indexRouter = require('./routes/index.routes')
const dotenv = require('dotenv')
const connecttoDB = require("./config/db")
const cookieParser = require('cookie-parser')


dotenv.config()
connecttoDB()

const app = express()
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", 'ejs')


app.use('/', indexRouter)
app.use('/user', userRouter)



app.listen(3000)