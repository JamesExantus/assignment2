
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

//end of list


// arrays for functions.
const shortenedMonth = ["jan", "feb", "march", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"];
const orderOf = ["first","second","third"];
const overTwentyOne = [18, 19, 20, 21, 22, 23];


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
            console.log(nums[i]);
            return nums[i];
        }
    }
    return -1;
}
    myUnshift(overTwentyOne, 22);


//grab keys
function grabKeys(keyobj){
    let keytxt = " ";
    for(x in myKeyObjects ){
        keytxt += x;
        console.log(keytxt);
    }
    console.log(keytxt);
    return keytxt;
}
grabKeys(myKeyObjects);

//grab values
function grabValues(keyobj){
    let txt = " ";
    for( x in myKeyObjects ){ 
        txt += myKeyObjects[x];   
        console.log(txt); 
    }
    return txt;
}
grabValues(myKeyObjects);