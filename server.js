const client = require("./config/db");
const express = require("express");
const bodyparser = require("body-parser");
const authRoutes = require("./routes/userRoute");
const logger = require("./logger/logger");
const chatRouter = require('./routes/sendMessagesRoute'); 
const cronJob = require('./utils/cronJob');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());

app.use('/api/auth', authRoutes);



app.use('/api/chat',chatRouter);



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client;
    logger.info('Connected to the Database Successfully');

    app.listen(PORT, () => {  //server running on port
      logger.info(`Server listening on port ${PORT}`);
      console.log(`Server listening on port ${PORT}`);
    })
  } catch (e) {
    logger.error(`Database connection error: ${e.message}`);
    console.log(e);
  }
}
run().catch((e) => logger.error(`Run Function Error: ${e.message}`));