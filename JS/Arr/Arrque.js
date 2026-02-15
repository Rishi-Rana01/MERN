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
// let arr = [1, 2, 3, 2, 4, 3];

// for (let n = 0; n < arr.length; n++) {
//     for (let m = n + 1; m < arr.length; m++) {
//         if (arr[n] === arr[m]) {
//             arr.splice(m, 1);
//             m--;
//         }
//     }
// }
// console.log(arr);


//PALLINDROME USING TWO POINTERS ARRAY

// let array= [1,2,3,2,1];
// let left=0;
// let right=array.length-1;
// let isPalindrome=true;

// while(left<right)
// {
//     if(array[left]!==array[right])
//     {
//         isPalindrome=false;
//         break;
//     }
//     left++;
//     right--;
// }
// console.log(isPalindrome);


//odd even no in array

// let arr=[1,2,3,4,5,6];
// let odd=[];
// let even=[];

// for(let n=0; n<arr.length; n++)
// {
//     if(arr[n]%2===0)
//     {
//         even.push(arr[n]);
//     }
//     else
//     {
//         odd.push(arr[n]);
//     }
// }
// console.log("Even numbers: ", even);
// console.log("Odd numbers: ", odd);

//Prime numbers in array
let arr=[1,2,3,4,5,6,7,8,9,10];
let prime=[];

for(let n=0; n<arr.length; n++)  {
    let isPrime=true;
    if(arr[n]<2)
    {
        isPrime=false;
    }
    else
    {
        for(let i=2; i<=Math.sqrt(arr[n]); i++)
        {
            if(arr[n]%i===0)
            {
                isPrime=false;
                break;
            }
        }
    }
    if(isPrime)
    {
        prime.push(arr[n]);
    }
}
console.log(prime);
