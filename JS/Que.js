

// 1. SOLID SQUARE PATTERN
console.log("===== 1. SOLID SQUARE (5x5) =====");
let n = 5;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += "* ";
    }
    console.log(row);
}

// 2. HOLLOW SQUARE PATTERN
console.log("\n===== 2. HOLLOW SQUARE (5x5) =====");
n = 5;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
    
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

// 3. DOWNWARD TRIANGLE (Inverted)
console.log("\n===== 3. DOWNWARD TRIANGLE =====");
n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

// 4. RIGHT ANGLE TRIANGLE (Downward)
console.log("\n===== 4. RIGHT ANGLE TRIANGLE (DOWNWARD) =====");
n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

// 5. PYRAMID PATTERN

n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

// 6. STAR PATTERN (Diamond)

n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    // spaces
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    // stars
    for (let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}
// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    // Add spaces
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    // Add stars
    for (let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}

// 7. HOLLOW PYRAMID
n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
   
    for (let j = 0; j < 2 * i - 1; j++) {
        if (i === 1 || i === n || j === 0 || j === 2 * i - 2) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}


// . MULTIPLICATION TABLE PATTERN
n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}
