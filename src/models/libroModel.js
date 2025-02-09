require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_DB } = process.env;

mongoose.connect(`mongodb://127.0.0.1:27017/biblioteca`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
  },
  { collection: "libros" }
);

const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;
