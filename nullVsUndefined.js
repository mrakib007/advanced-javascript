// let pakhi;
function add(num1,num2){
    console.log(num1+num2);
    return;
}
function add(num1,num2=10){
    console.log(num1, num2);
}
const result = add(13,82);
const result = add(13);
console.log(result);
console.log(pakhi);

const premik = {name:'smart dude',phone:'55456'};
console.log(premik.gf);

let fun = undefined;
console.log(fun); //falsy

let ages = [2,5,9];
console.log(ages[11]);