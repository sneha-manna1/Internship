function Check(a) {
    console.log(`Array : ${a}`);
    let countEven = 0;
    for(let n of a) {
        if(n%2 === 0 && n > 50) {
            countEven++;
        }
    }
    console.log(`Total Even Numbers Greater Than 50 in This Array : ${countEven}`);
}
module.exports = {Check};