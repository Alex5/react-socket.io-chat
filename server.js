const express = require('express')
const PORT = 3001

const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors: {
        origin: `*`,
    }
});

app.use(express.json())

const rooms = new Map()

app.get('/', (req, res) => {
    res.send('Home page')
    console.log('открыта домашняя страница')
})

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body
    if (!rooms.has(roomId)) {
        rooms.set(roomId, new Map([
            ['users', new Map()],
            ['messages', []],
        ]))
    }
    res.send()
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