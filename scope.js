let bonus = 20; //global scope
function sum(first,second){
    let result = first + second + bonus;
    console.log(result);
    if(result>9){
        const mood = 'happy';
    }
    console.log(day);
    var day = 'friday';
    return result;
   
}

const output = sum(3,7);
console.log(output);