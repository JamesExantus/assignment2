
// list of  callback functions 
function myEachCallBack(elem,a,arr){
    elem = arr[a];
    console.log(arr[a]);
}

function myMapCallBack(elem,a,arr){
    elem = arr[a];
    console.log(a+1,arr[a]);
}
function myFilterCallBack(elem, a, arr, testing){
        elem = arr[a];
        if(elem.length > testing){
            console.log(elem);
        }
}

function mySomeCallBack(elem, a, arr){
    if(arr[a] >=21 ){
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}

function myEveryCallBack(arr,a){
    if(arr[a] < 24){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
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

//end of list

//My Each function.
const orderOf = ["first","second","third"];

function myEach(nums,cb) {
    for(let i = 0; i< nums.length; i++){
        cb(nums[i],i,nums);
    }
}
    myEach(orderOf,myEachCallBack);
    

// My Map
const kyArray = [10,20,30];
function myMap(nums,cb){
    for(let i = 0; i <nums.length; i++){
       cb(nums[i],i,nums);
    }
}
myMap(kyArray,myMapCallBack);

//My filter
const shortenedMonth = ["jan", "feb", "mar", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"];
let criteria = 3;

function myFilter(nums,cb,testnum)
{
    for(let i = 0; i<nums.length; i++){
        cb(nums[i],i,nums,testnum);
    }
    return nums;
}
myFilter(shortenedMonth,myFilterCallBack,4);

//my Some
const overTwentyOne = [18, 19, 20, 21, 22, 23];

function mySome(nums, cb){
    for(let i = 0; i<nums.length; i++){
        cb(nums[i],i,nums);
    }
}
mySome(overTwentyOne,mySomeCallBack);

//my Every
function myEvery(nums,cb){
    for(let i = 0; i < nums.length; i++){
      cb(nums[i],i,nums);

    }
}
myEvery(overTwentyOne,myEveryCallBack);

//my Reduce
function myReduce(nums, cb) {
    let accumulator = 0;
    let currvalue = nums[0];
        cb(accumulator, currvalue,nums);
}

myReduce(overTwentyOne, myReduceCallBack);

/*
    The entire browser crashes when these functions are ran. 

//my includes
function myincludes(nums,target) {
    for(let i = 0; nums.length; i++){
        if(nums[i] == target){
            console.log(true);
            return true;
        }
    }
}
myincludes(overTwentyOne,21);


//myIndexOf
*/
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
function myUnshift(){

}

//grab keys

function grabKeys(){

}

//grag values
function grabValues(){

}