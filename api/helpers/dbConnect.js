import mongoose from 'mongoose'

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  mongoose.connect(
    'mongodb+srv://osemberggabi:vOXc0ZBeSZjKY0dR@luzerin.erja9z7.mongodb.net/?retryWrites=true&w=majority&appName=Luzerin'
  )
}

export default dbConnect
