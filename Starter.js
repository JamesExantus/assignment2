
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

function myReduceCallBack(arr, a){


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
function myMap(nums){
    for(let i = 0; i <nums.length; i++){
       myMapCallBack(nums[i],i,nums);
    }
}
myMap(kyArray);

//My filter
const shortenedMonth = ["jan", "feb", "mar", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"];
let criteria = 3;

function myFilter(nums, testnum)
{
    for(let i = 0; i<nums.length; i++){
        myFilterCallBack(nums[i],i,nums, testnum);
    }
}
myFilter(shortenedMonth,criteria);

//my Some
const overTwentyOne = [18, 19, 20, 21, 22, 23];

function mySome(nums){
    for(let i = 0; i<nums.length; i++){
        mySomeCallBack(nums[i],i,nums);
    }
}
mySome(overTwentyOne);

//my Every
function myEvery(nums){
    for(let i = 0; i < nums.length; i++){
      myEveryCallBack(nums,i);

    }
}
myEvery(overTwentyOne);

//my Reduce
function myReduce(nums) {
    for(let i =0; i <nums.length; i++){

    }
}



