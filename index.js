const express = require('express');
const cors = require('cors');
const moongoose = require('mongoose');
const live_url = 'mongodb://dev_olabiyi:test1234@ac-fzah8uz-shard-00-00.0c8djyq.mongodb.net:27017,ac-fzah8uz-shard-00-01.0c8djyq.mongodb.net:27017,ac-fzah8uz-shard-00-02.0c8djyq.mongodb.net:27017/?ssl=true&replicaSet=atlas-2t4hxo-shard-0&authSource=admin&appName=Cluster0';
const local_url = 'mongodb://localhost:27017/userDB';
const router = require('./routes/todoRoutes.js');

moongoose.connect(live_url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;