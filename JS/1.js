// let score = 60;

// if (score >= 90) {
//     console.log("Grade A ");

// } else if (score >= 80) {
//     console.log("Grade : B");

// } else if (score >= 70) {
//     console.log("Grade : C");

// } else {
//     console.log("Firr se Pdoooo Ja Krrr........ Nikloooooooooo///");
// }



// var a = 10, b = 50, c = 5, d = 100;

// if (a >= b && a >= c && a >= d) {
//     console.log("A is the largest");
// } else if (b >= a && b >= c && b >= d) {
//     console.log("B is the largest");
// } else if (c >= a && c >= b && c >= d) {
//     console.log("C is the largest");
// } else {
//     console.log("D is the largest");
// }



// let score = 65;

// switch (score) {
//     case (score >= 90):
//         console.log("Grade A");
//         break;
//     case (score >= 80):
//         console.log("Grade : B");
//         break;
//     case (score >= 70):
//         console.log("Grade : C");
//         break;
//     default:
//         console.log("Firr se Pdoooo Ja Krrr........ Nikloooooooooo///");
// }


// function processNumbers(nums) {
//     // 1. Remove duplicates 
//     let uniqueNums = [...new Set(nums)];

//     // 2. Sort 
//     uniqueNums.sort((a, b) => a - b);

//     console.log("Unique:", uniqueNums);

//     //  second largest number
//     if (uniqueNums.length >= 2) {
//         let secondLargest = uniqueNums[uniqueNums.length - 2];
//         console.log("Second Largest Number:", secondLargest);
//     } else {
//         console.log("Not enough unique numbers to find the second largest.");
//     }
// }

// const myNumbers = [10, 20, 4, 45, 99, 20, 99, 4];
// processNumbers(myNumbers);

function program(str) {
    // 1.  Palindrome
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    let reversedStr = cleanStr.split("").reverse().join("");
    let isPalindrome = (cleanStr === reversedStr);

    // 2. Count Vowels
    let vowelCount = 0;
    const vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    console.log(`Original String: ${str}`);
    console.log(`Is it a Palindrome?: ${isPalindrome}`);
    console.log(`Number of Vowels: ${vowelCount}`);
}

program("Rishi Rana");
program("MAM");