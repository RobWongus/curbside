<<<<<<< HEAD
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Welcome'))

module.exports = router;
=======
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = router;
>>>>>>> master
