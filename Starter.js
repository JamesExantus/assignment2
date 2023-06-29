
// list of  callback functions  and objects
function myEachCallBack(elem,a,arr){
    elem = arr[a];
    console.log(arr[a]);
}

function myMapCallBack(elem,a,arr){
    elem = arr[a] * 2;

    return elem;
}

function myFilterCallBack(elem, a, arr, testing){
        elem = arr[a];
        if(elem.length >= testing){
            return true;
        }
            return false;
}

function mySomeCallBack(elem, a, arr){
    if(arr[a] >= 21 ){
        return true;
    }
    else {
        return false;
    }
}

function myEveryCallBack(arr,a){
    if(arr[a] >= 21){
        return true;
    }
    else{
        return false;
    }
}

function myReduceCallBack(accu, currv, arr ){
    
    for(let i = 0; i < arr.length; i++){
        accu += arr[i];
    }
    console.log(accu);
    return accu;
    
}

const myKeyObjects = {
    age : 21,
    birthday : "december",
    placement : "first"
};

//end of list of callbacks


// arrays for functions.
const shortenedMonth = ["jan", "feb", "march", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"];
const orderOf = ["first","second","third"];
const overTwentyOne = [18, 19, 20, 21, 22, 23];
const sumExample = [1,2,3,4,5,6,7,8,9,10];
const list1 = {
    value: 1, rest: { value: 2, rest: {  value: 3,  rest: null  }   }
};

const list2 = {
    value: 1, rest: { value: 2, rest: {  value: 3,  rest: null  }   }
};

const newlist = ['first', 'second', 'third'];



//My Each function.
function myEach(nums,cb) {
    for(let i = 0; i< nums.length; i++){
        cb(nums[i],i,nums);
    }
}
    myEach(orderOf,myEachCallBack);
    
// My Map
const kyArray = [10,20,30];
function myMap(nums,cb){
    let newArray = []
    for(let i = 0; i <nums.length; i++){
       newArray.push(cb(nums[i],i,nums));
    }
    return newArray;

}
console.log(myMap(kyArray,myMapCallBack));
myMap(kyArray,myMapCallBack);

//My filter

function myFilter(nums,cb,testnum)
{
    let newArray = [];
    for(let i = 0; i<nums.length; i++){
       if(cb(nums[i],i,nums,testnum) == true){
        newArray.push(nums[i]);
       }
    }
    return newArray;
}
console.log(myFilter(shortenedMonth,myFilterCallBack,4));
myFilter(shortenedMonth,myFilterCallBack,4);

//my Some
function mySome(nums, cb){
    for(let i = 0; i<nums.length; i++){
        if(cb(nums[i],i,nums)){
            return true;
        };
    }
    return false;
}
mySome(overTwentyOne,mySomeCallBack);

//my Every
function myEvery(nums,cb){
    for(let i = 0; i < nums.length; i++){
      if(cb(nums[i],i,nums) == false);
    }
    return true
}
myEvery(overTwentyOne,myEveryCallBack);

//my Reduce
function myReduce(nums, cb) {
    let accumulator = 0;
    let currvalue = nums[0];
        cb(accumulator, currvalue,nums);
}
myReduce(overTwentyOne, myReduceCallBack);

//my includes
function myincludes(nums,target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            console.log(true);
            return true;
        }
    }
}
myincludes(overTwentyOne,21);

//myIndexOf
function myIndexOf(nums,target){
    let temp = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]== target) {
            console.log(nums[i]);
            temp = i;
        }
    }
    console.log(temp);
   return temp;
}

myIndexOf(overTwentyOne,21);

// my push
function myPush(elementn,nums){
    let oldsize = nums.length;
   let size = nums.length * 2;
   let newarr = [size];
    for(let i = 0; i < nums.length; i++){
        newarr[i] = nums[i];
    }
    newarr[oldsize] = elementn;
    nums = newarr;
    return nums;
}
myPush(40, overTwentyOne);

//my unshift
function myUnshift(nums, target){

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            console.log(i);
            return i;
        }
    }
    return -1;
}
    myUnshift(overTwentyOne, 22);


//grab keys
function grabKeys(keyobj){
    let newArray = [];
    let keytxt = " ";
    for(x in myKeyObjects ){
        newArray.push(x);
      
    }
    console.log(newArray);
    return newArray
}
grabKeys(myKeyObjects);

//grab values
function grabValues(keyobj){
    let txt = " ";
    let newArray = [];
    for( x in myKeyObjects ){ 
    
        newArray.push(myKeyObjects[x]); 
    }
    console.log(newArray);
    return newArray;
}
grabValues(myKeyObjects);

//sum of a range

function range(start, end){
    let newArray = [];
    let left = start;
    let numofelements = end - start;

    for( let i = 0 ; i <= numofelements; i++){
        newArray[i] = left;
        left++;
        console.log(newArray[i]);
    }
    return newArray;
}

range(5,10);

function sum(nums){
    let accumulator = 0;
    for(let i = 0; i < nums.length; i++){
        accumulator += nums[i]; 
    }
    console.log(accumulator);
    return accumulator;
}

sum(sumExample);

//reverse array and reverse array in place

function reverseArray(nums){
    let newArray = [];
    let right = nums.length-1;
    for(let left = 0; left < nums.length; left++){
        newArray[left] = nums[right];
        right--;
    }
    console.log(newArray);
    return newArray;
}

reverseArray(overTwentyOne);

function reverseArrayinPlace(nums){
    let right = nums.length;
    
    for(let left = 0; left <= nums.length; left++){
        while(right > left){
        nums[left] = nums[right];
        right --;
        }
    }
    console.log(nums);
    return nums;
}
reverseArrayinPlace(overTwentyOne);

//a List
function arrayToList(num1, num2, num3){
    let list = {
        value: num1,
        rest: {
            value: num2,
            rest: {
                value: num3,
                rest: null
            }
        }
    };

}

function listToArray(atlList){
let newArray = [];
    for(let i = 0; i != null; i++){
        newArray[i] = atlList.indexof(i);
    }
    while (atlList != null){

    } 

}


function prepend(elem, atlList){
    let newList = [elem, ...atlList];

    return newList;

}

function nth(atlList, target){
    if (target < 0 || target >= atlList.length) {
        return undefined;
      }
    
      return atlList[target];
     
}
nth(newlist, 0);

//deep equal function

function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true;
      }
    
      if (typeof val1 !== 'object' || typeof val2 !== 'object' || val1 === null || val2 === null) {
        return false;
      }
    
      const keysA = Object.keys(val1);
      const keysB = Object.keys(val2);
    
      if (keysA.length !== keysB.length) {
        return false;
      }
    
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(val1[key], val2[key])) {
          return false;
        }
      }
    
      return true;
    
    }

console.log(deepEqual(list1, list2));
deepEqual(list1,list2);