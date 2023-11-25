const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description", status: "Works." }

    res.send(blog)
})

const port = 3000

app.listen(port)