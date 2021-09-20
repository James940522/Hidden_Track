const express = require('express');
const router = express.Router();
const { trackController } = require("../controllers");

router.post('/', trackController.track.post);
router.patch('/', trackController.track.patch);
router.delete('/', trackController.track.delete);

module.exports = router;
