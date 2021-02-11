// №1

var myNum = 10,
    myStr = 'строка',
    myBool = true,
    myArr = [1, 2, 3, 4, 5],
    myObj = {
      first:'First Name',
      last:'Last Name'
    };

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

// №2

var decimal2 = myNum.toFixed(2);

// №3

var i = 15;
console.log(++i); // 16
console.log(i--); // 16 --> 15
console.log(i++); // 15 --> 16
console.log(i); // 16
console.log(i++); // 16 --> 17
console.log(++i); // 18
console.log(--i); // 17

// №4

var myTest = 20;
    myTest += 20;
    console.log(myTest);
    myTest -= myNum;
    console.log(myTest);
    myTest *= 5;
    console.log(myTest);
    myTest /= myNum;
    console.log(myTest);
    myTest %= 10;
    console.log(myTest);

// №5

var myPi = Math.PI;
console.log(myPi);
var myRound = Math.round(89.279);
console.log(myRound);
var myRandom = Math.round(Math.random()*10);
console.log(myRandom);
var myPow = Math.pow(3, 5);
console.log(myPow);

// №6

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log(strObj.length);

// №7

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

// №8

var strReplace = strObj.str.replace('мыла','моет');
strReplace = strReplace.replace('рама','Рама');
strReplace = strReplace.replace('мыла','держит');
console.log(strReplace);

// №9

console.log(strObj.str.toUpperCase());
console.log(strReplace.toLowerCase());