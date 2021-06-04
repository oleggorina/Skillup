var userObj = {
  firstName: 'Oleg',
  lastName: 'Gorina',
  age: 25,
  fullName: function(){
    return `${userObj.firstName} ${userObj.lastName}`;
  }
}

console.log(userObj.fullName());

function defUpperStr(str){
  return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n){
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if(i % 2 === 0){
      arr.push(i);
    }
  }
  return arr;
}

console.log(evenFn(20));

function weekFn(n){
  let str = '';

  switch (n) {
    case 1: str = 'Понедельник'; 
    break;
    case 2: str = 'Вторник'; 
    break;
    case 3: str = 'Среда'; 
    break;
    case 4: str = 'Четверг'; 
    break;
    case 5: str = 'Пятница'; 
    break;
    case 6: str = 'Суббота'; 
    break;
    case 7: str = 'Воскресенье'; 
    break;
    default: str = null;
  }

  return str;
}

console.log(weekFn(7));

function ageClassification(n){
  // return n < 0 ? null :
  //        n < 24 ? 'детский возраст' :
  //        n < 44 ? 'молодой возраст' :
  //        n < 65 ? 'средний возраст' :
  //        n < 75 ? 'пожилой возраст' :
  //        n < 90 ? 'старческий возраст' :
  //        n < 122 ? 'долгожители':
  //        null;
  return n > 0
    ? n > 24
      ? n > 44
        ? n > 65
          ? n > 75
            ? n > 90
              ? n > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log(ageClassification(25));

function oddFn(n){
  var arr = [];
  var i = 0;
  while (i++ < n) {
    if(i % 2 !== 0){
      arr.push(i);
    }
  }
  return arr;
}

console.log(oddFn(15));

function mainFunc(a,b,func){
  if (typeof func === 'function'){
    return func(a,b);
  }
  return false;
}

function cbRandom(a,b){
  return Math.floor(Math.random() * (b-a+1) + a);
}

function cbPow(a,b){
  return Math.pow(a,b);
}

function cbAdd(a,b){
  return a + b;
}

console.log(mainFunc(2,5,cbRandom));
console.log(mainFunc(2,5,cbPow));
console.log(mainFunc(2,5,cbAdd));
console.log(mainFunc(2,5,'not a func'));
