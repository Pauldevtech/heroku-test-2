const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/info', (req, res) => {
    res.json('This is the information to be displayed')
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))