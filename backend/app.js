const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');

const userRouter = require('./routes/user.route');
const docRouter = require('./routes/doc.route');
const postRouter = require('./routes/post.route')


const app = express();

const corsOptions = {
    origin: '*', // Replace with your app's domain
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

app.use(bodyparser.json());


app.use('/users',userRouter);
app.use('/doc',docRouter);
app.use('/post',postRouter);





module.exports = app;