
function Birds(arr) {
    let max = 1;
    let min=Infinity;
    let counter = largest;
    let counter1=smallest;
    let a = 0;
    let b=0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        max = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
        if (max > counter) {
            counter = max;
            a = arr[i];
        }
    }
    for(let i=0;i<arr.length;i++)
    {
        min=(arr.lastIndexOf(arr[i])-arr.indexOf(arr[i]))+ 1;
        if(min<counter1){
            counter1=min;
            b=arr[i]
        }
    }
return [a,b];
}
arr1 = [1, 1, 2, 2, 4, 4, 4, 4, 5];
arr2 = [2, 2, 2, 2, 4, 4, 4, 4, 5];
arr3 = [1, 2, 2, 4, 4, 4, 4, 5];
console.log(Birds(arr1))
console.log(Birds(arr2))
console.log(Birds(arr3))