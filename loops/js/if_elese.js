const largest = (num1, num2, num3, num4) => {
    // Initialize the variable
    let largest = num1;

    // Compare with the second number
    if (num2 > largest) {
        largest = num2;
    }

    // Compare with the third number
    if (num3 > largest) {
        largest = num3;
    }

    // Compare with the fourth number
    if (num4 > largest) {
        largest = num4;
    }

    // Return the largest number
    return largest;
};


console.log(largest(1, 2, 3, 4));