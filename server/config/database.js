require('dotenv').config()
const path = require('path');
const debug = require('debug')("bullyingapp:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URI || 'mongodb://localhost/bullyingapp';

mongoose.connect(dbURL)
  .then(() => debug(`connected to database ${dbURL}`))
  .catch(e => {
    debug(`ERROR CONNECTING TO DB ${dbURL}`);
    throw e;
  });
