var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
  // Log req content
  console.log('==================================================');
  console.log('Method:', req.method);
  console.log('--------------------------------------------------');
  console.log('Headers:', req.headers);
  console.log('--------------------------------------------------');
  console.log('Body-JSON:', JSON.stringify(req.body));
  console.log('Body-String:', req.body);
  console.log('==================================================');

  // Response
  res.json({
    status: true,
    message: 'Copy that'
  });
});

module.exports = router;
