
const express = require('express')
const morgan = require('morgan')
const userRouter = require('./routes/user.routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", 'ejs')


app.use('/user', userRouter)


app.listen(3000)