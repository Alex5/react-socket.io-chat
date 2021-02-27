const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors: {
        origin: `*`,
    }
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const rooms = new Map()

app.get('/rooms/:id', (req, res) => {
    const {id: roomId} = req.params
    const obj = rooms.has(roomId)
        ? {
            users: [...rooms.get(roomId).get('users').values()],
            messages: [...rooms.get(roomId).get('users').values()],
        }
        : {users: [], messages: []}
    res.json(obj)
})

app.post('/rooms', (req, res) => {
    const {roomId} = req.body
    if (!rooms.has(roomId)) {
        rooms.set(roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]))
    }
    res.send()
})


io.on('connection', socket => {
    socket.on('ROOM:JOIN', ({roomId, userName}) => {
        // подключаемся в комнату
        socket.join(roomId)
        // сохраняем всё в "базе данных"
        rooms.get(roomId).get('users').set(socket.id, userName)
        // получаем всех пользователей
        const users = [...rooms.get(roomId).get('users').values()]
        // в определенной комнате, всем кроме меня нужно отправить сокет запрос
        socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users)
        console.log(roomId, userName)
    })

    socket.on('disconnect', () => {
        rooms.forEach((value, roomId) => {
            if (value.get('users').delete(socket.id)) {
                // получаем всех пользователей
                const users = [...value.get('users').values()]
                // в определенной комнате, всем кроме меня нужно отправить сокет запрос
                socket.to(roomId).emit('ROOM:SET_USERS', users)
            }
        })
    })

    console.log('User connected', socket.id)
})


httpServer.listen(PORT, (ERR) => {
    if (ERR) {
        console.log(ERR)
    }
    console.log(`App listening at http://localhost:${PORT}`)
})