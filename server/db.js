const mongo = require('mongoose');
process.env.MONGO_ATLAS_URL='mongodb+srv://lms:lms123@cluster0-numcz.mongodb.net/test?retryWrites=true&w=majority'
function startDb() {
  mongo.connect(process.env.MONGO_ATLAS_URL, {
    useNewUrlParser: true
  })
  .then(() => console.log('Mongodb successfully connected'));

  return mongo.connection
    .on('error', console.error)
    .on('disconnected', startDb);
}

module.exports = {
  startDb,
};
