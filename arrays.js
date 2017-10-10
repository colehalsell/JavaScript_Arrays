//purpose: to find the highest number
var c = [6, 200,3000,57,2,8]
var b = [3, 5, 10, 7, 8]
// function highestNumber(array){
//   var sortedArray = array.sort(function(element1, element2) {
//     return element2-element1;
//   })
//   return sortedArray[0];
// }

function highestNumber(array){
  var max=0;
  array.forEach(function(element){
    if (element>max){
      max = element
    }
  })
  return max
}



//to target the last digit of an array use .length-1
// function lowestNumber(array){
//   var sortedArray = array.sort(function(element1, element2){
//     return element2-element1;
//   })
//   return sortedArray[sortedArray.length-1];
// }

var d = [-250, -16, -2, 5, 34, 200]

function smallestNumber(array){
  var smallest=500000;
  array.forEach(function(element){
    if(Math.abs(element)<Math.abs(smallest)){
      smallest=element
    }
  })
  console.log(smallest)
}


//this works but not exactly sure why (what is the .reduce actually do??)
function getSum(array){
var sum = array.reduce(function(a, b) {
  return a + b; }, 0);
  console.log(sum);
}
//alternative sum
var d = [-250, -16, -2, 5, 34, 200]

function getSum(array){
  var sum=0;
  array.forEach(function(element){
    sum=sum+element;
  })
  return sum;
}


function getMean(array){
  var num = array.length;
var sum = array.reduce(function(a, b) {
  return a + b; }, 0);
  console.log(sum/num);
}

function getMean(array){
  var num = array.length;
var sum = getSum(array);
  console.log(sum/num);
}
function indexHighestNumber(array){

}
//
function IndexHighestNumber(array){
  var highNum = highestNumber(array)
    var index=array.lastIndexOf(highNum);
  console.log(index)
}


var siblingNames = ["Jonah", "Janae", "Bob","Anna", "Chris"]
var parentsNames = ["Colin", "Harriet", "Jeff", "Kristin"]
var Names = siblingNames.concat(parentsNames)
Names.sort("")
Names.reverse()
  siblingNames.sort("");
  siblingNames.reverse();

function isName(name){
  var index = Names.lastIndexOf(name)
  if (index == -1){
    return ("Not present..");
  }else {
    return ("Yes!");
  }
}
var numbers = [1,2,3,4,5,6,7,8,9,10]

function isEven(element){
  return (element % 2 == 0)
}
function evenElements(array){
  console.log(array.filter(isEven));
}

function isOdd(element){
  return (element % 2 == 1)
}
function oddElements(array){
  console.log(array.filter(isOdd));
}

function timesTwo(array){
  var doubles = array.map(function(x) {
    return x * 2;
  })
  console.log(doubles);
}


function fun(elements){
  return (elements % 2 == 0);
}


function trueElements(array, fun){
  var results = array.filter(fun);
  console.log(results);
}


for (var i=0; i<10; i++) { console.log(i); }

var a = 10;
while (a > 0) {
  console.log(a);
  a = a - 1;
}
