const express = require('express');
const db = require('./models');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const allRoutes = require('./controllers');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Dev CORS
app.use(cors())

app.use('/', allRoutes)

// Sync Sequelize Models and start app
db.sequelize.sync({force:false}).then(function () {
    app.listen(PORT, function() {
        console.log('App listening on PORT' + PORT)
    })
})