const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//for the test:
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AroRay application." });
});

require("./routes/user-routes")(app);

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    //console.log(db.url);
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

db.mongoose.connection.once('open', function(){
  console.log('connection has been made......')
}).on('error', function(error){
  console.log('Connection Error:', error)
})