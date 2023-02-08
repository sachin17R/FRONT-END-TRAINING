const { mull } = require('./custModule')

const addfunc1 = require('./custModule').addfunc

addfunc1(10,20)

const mulll1 = require("./custModule").mull

mulll1();


const empClass1 = require("./custModule").empClass

const obj1 = new empClass1(3338,"sachin","mysore");

obj1.showing();