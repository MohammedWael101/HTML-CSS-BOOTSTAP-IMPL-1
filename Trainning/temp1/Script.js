function positiveSum(arr){
    
    let sumArr = arr.reduce((b,c)=>{
        if(c > 0){
            // console.log(c);
            console.log(b);
            return b + c;
        }
    });
    return sumArr;
}
console.log(positiveSum([1,-2,3,4,5]));