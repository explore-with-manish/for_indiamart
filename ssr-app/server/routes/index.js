var express = require('express');
var router = express.Router();

import * as homeCtrl from '../controllers/home-controller';

router.get("/", homeCtrl.index);

export default router;
