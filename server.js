const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

    const Pusher = require('pusher');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    require('dotenv').config()

    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    const pusher = new Pusher({
      appId: process.env.REACT_APP_PUSHER_ID,
      key: process.env.REACT_APP_PUSHER_KEY,
      secret: process.env.REACT_APP_PUSHER_SECRET,
      cluster: process.env.REACT_APP_PUSHER_CLUSTER
    });
    app.set('PORT', 5000);

    app.post('/message', (req, res) => {
      const payload = req.body;
      pusher.trigger('chat', 'message', payload);
      res.send('payload')
    });

    app.listen(app.get('PORT'), () => 
      console.log('Listening at ' + app.get('PORT')))