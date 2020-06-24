const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;


// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/credentials", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});