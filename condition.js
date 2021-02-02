const age = 4;
const name = " salman khan";
let name;
if(age && name){
    console.log('is true');
    console.log(name);
}
else{
    console.log('false');
}
//if I pass a value directly in an if else condition, js will automatically 
// assume it true and execute the code. same goes for string . If the value is 0
// then it will assume false. same goes for empty string too 
// for string if the string contains only a single space or zero then it will aslo be true 
//If something is not undefined then it is false. Same goes for null and NaN.
 
// false: false 0 "" undefined null Nan 
// true: '0', ' ',[]