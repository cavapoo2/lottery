//size is int , miss is array of numbers to not include in the returned array
function randomIntInRange(min,max) {
     return  Math.floor(Math.random() * (max - min + 1)) + min;
}
function oneTo50Random(size, miss) {
    let res = [];
    while(res.length != size) {
        let next = randomIntInRange(1,50);
        if(miss.length > 0 && miss.includes(next)) continue;
        if(res.length > 0 && res.includes(next)) continue;
        res.push(next);
    }
    return res;
}
function oneto12Random(miss) {
    if(miss.length > 1) return miss;
    let res = [];
    while(res.length !== 2 ) {
        let next = randomIntInRange(1,12);
        if(miss.length > 0 && miss.includes(next)) continue;
        if(res.length > 0 && res.includes(next)) continue;
        res.push(next);
    }
    return res;
}
//size is length of returned random numbers
//max is the maximum number size (in range 1 - max)
//miss is an array of numbers to avoid
function onetoNRandom(size,max,miss) {
    if (miss.length >= size) return miss; //already have numbers, no need to compute
    let res = [];
    while(res.length !== size) {
        let next = randomIntInRange(1,max);
        if(miss.length > 0 && miss.includes(next)) continue;
        if(res.length > 0 && res.includes(next)) continue;
        res.push(next);
    }
    return res.sort((a,b) => a > b);
}


function findMaxMin(iterations) {
    let min=100;
    let max = 0;
    let count=0;
    while (count < iterations) {
        let x = randomIntInRange(1,50);
        if(x < min) min = x;
        if(x > max) max = x;
        count++;
    }
    console.log('min is ', min);
    console.log('max is ', max);

}

//console.log(oneTo50Random(5,[]));
//console.log(findMaxMin(10000));
console.log(onetoNRandom(5,50,[]));
