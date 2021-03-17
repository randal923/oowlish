export default {
  mongoUrl: process.env.NODE_ENV === 'production' ? process.env.MONGO_URL : 'mongodb://0.0.0.0:27017/oowlish_dev'
}
