const express = require('express')
const path = require('path')
const logger = require('./middleware/Logger')

const app = express()
const PORT = 5000

// init middleware
// app.use(logger)

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// individualMembers API
app.use('/api/members', require('./routes/api/individualMenber'))

app.listen(PORT, (req, res) => console.log(`Server is running in port: ${PORT}`))