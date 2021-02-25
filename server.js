const express = require('express')
const PORT = 3001

const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors: {
        origin: `http://localhost:3000`,
    }
});

const rooms = new Map()

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

io.on('connection', socket => {
    console.log('User connected', socket.id)
})

httpServer.listen(PORT, (ERR) => {
    if (ERR) {
        console.log(ERR)
    }
    console.log(`App listening at http://localhost:${PORT}`)
})