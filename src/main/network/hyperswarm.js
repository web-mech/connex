const { ipcMain } = require('electron')
const network = require('@hyperswarm/network')
const JsonSocket = require('json-socket')
const crypto = require('crypto')
const net = network()
const topic = crypto.createHash('sha256')
  .update('connect-test')
  .digest()

const sockets = []

export default function connectMain (window) {
  return new Promise((resolve, reject) => {
    console.log('Testing hole-punchability...')

    ipcMain.on('send-message', (data) => {
      sockets.forEach((socket) => {
        socket.sendMessage({ content: data })
      })
    })

    net.discovery.holepunchable((err, yes) => {
      if (err) console.error('Error while testing for holepunch capability', err)
      else if (yes) console.log('Your network is hole-punchable!')
      else console.log('Your network is not hole-punchable. This will degrade connectivity.')

      net.on('connection', function (socket, info) {
        console.log('New connection!')

        socket = new JsonSocket(socket)

        sockets.push(socket)

        socket.on('message', (data) => {
          console.log(data)
          window.webContents.send('message-received', data)
        })

        resolve(socket)
      })

      net.join(topic, {
        lookup: true,
        announce: true
      })
    })
  })
}
