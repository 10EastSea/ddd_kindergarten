const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

const port = config.get('port');
const app = express();
const logger = require('./middlewares')


app.use(bodyParser.json());
app.use(cors({origin: "*"}));


app.get('/', (req, res, next) => {
    res.send('hello world!');
});

const server = app.listen(port, () => console.log(`Server is listening on port ${port}`));

// if you need DB, you can use this code. (set up in src/models/index.js)

//const db = require('./models');

// db.once('open', function () {           
//     console.log('DB Connected');
// });

// db.on('error', function (err) {
//     console.log('DB ERROR : ', err);
// });

const io = require("socket.io")(server, {
    cors: {
        origin:"*",
    }
});

io.on('connection', (socket) => {
  console.log('socket connected');
    
    
  socket.on('disconnect', () => {
    console.log('socket disconnected');
  });

  // socket.on('JOIN_ROOM', ({roomId, userId}) => {
  //     console.log({roomId, userId});
  //     socket.join(roomId);
  // })
    
  // socket.on('SEND_MESSAGE', ({roomId, userId, message}) => {
  //     console.log({roomId, userId, message});
  //     io.to(roomId).emit('UPDATE_MESSAGE', {userId, message});
  // })
	
	socket.on('JOIN_FIELD', ({fieldId, userId}) => {
		console.log({fieldId, userId});
		socket.join(fieldId);
	})
	
	socket.on('SEND_MOVEDATA', ({fieldId, userId, moveData}) => {
		console.log({fieldId, userId, moveData});
		io.to(fieldId).emit('UPDATE_MOVEDATA', {userId, moveData});
	})
    
});
