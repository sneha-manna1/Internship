function Check(number) {
    console.log("Number : "+ number);
    if(number%2 == 0){
        console.log(number + "is an Even Number.");
    } else {
       console.log(number + "is an Odd Number."); 
    }
}
module.exports = {Check};