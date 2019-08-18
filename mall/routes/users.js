var express = require('express');
var router = express.Router();
var model = require('../models/index');
var responseJSON = function (res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: '-200', msg: '操作失败 '
    });
  } else {
    res.json(ret);
  }
}
/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.send('respond with a resource');

});
/* GET users listing. */
router.get('/getall', function (req, res, next) {
  // res.send('get all detail:');

  try {
    // 查询成功后会返回包含多个实例（instance）的数组。
    var pets = null;
    (async () => {
      pets = await model['Users'].findAll();
      console.log(`find ${pets.length} pets:`);
      for (let p of pets) {
        console.log(JSON.stringify(p));
      }
      // return pets;
      responseJSON(res, pets);
    })();
  } catch (err) {
    console.log('err detial: ', err);
  }

});

module.exports = router;
