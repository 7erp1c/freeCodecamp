function getIndexToIns(arr, num) {
arr.push(num);
console.log(arr);
arr.sort((a,b)=>a-b);
console.log(arr);
let res = 0;
for(let i = 0;i<=arr.length;i++){
    if(arr[i] == num){
        return i;
    }
}
    return res;
}
console.log(getIndexToIns([2, 5, 10], 15));