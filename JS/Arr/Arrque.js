// Find the second largest number in an array
// let arr = [25,20,28,58,280];
// let largest= -Infinity;
// let secL= -Infinity;

// for(let n = 0; n<arr.length; n++)
// {
//     if(arr[n]>largest)
//     {
//         secL=largest;
//         largest=arr[n];
//     }
//     else if(arr[n]>secL && arr[n]<largest)
//     {
//         secL=arr[n];
//     }
// }
// console.log(secL);


// Remove Duplicates
let arr = [1, 2, 3, 2, 4, 3]

for (let n = 0; n < arr.length; n++) {
    for (let m = n + 1; m < arr.length; m++) {
        if (arr[n] === arr[m]) {
            arr.splice(m, 1);
            m--;
        }
        

    }