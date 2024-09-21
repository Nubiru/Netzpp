// require("dotenv").config();
import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import uploadRoute from './routes/uploadRoute.js'
import getListRoute from './routes/getListRoute.js'
import removeRoute from './routes/removeRoute.js'
import downloadRoute from './routes/downloadRoute.js'
import registerRoute from './routes/registerRoute.js'
import loginRoute from './routes/loginRoute.js'
import connectDB from './db/connect.js'

const app = express()
const PORT = process.env.PORT || 3500

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Account Manager App')
})

app.use('/files/upload', uploadRoute)
app.use('/files/getlist', getListRoute)
app.use('/files/remove', removeRoute)
app.use('/files/download', downloadRoute)

app.use('/users/register', registerRoute)
app.use('/users/login', loginRoute)
// app.use("/users/logout", logoutRoute);

async function start() {
  console.log('connecting...')

  try {
    await connectDB(
      'mongodb+srv://osemberggabi:vOXc0ZBeSZjKY0dR@luzerin.erja9z7.mongodb.net/?retryWrites=true&w=majority&appName=Luzerin'
    )
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
