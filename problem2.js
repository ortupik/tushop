const fs = require('fs');
const readline = require('readline');

// Function to distribute goodies among employees and find the minimum price difference
function allocateGoodies(data) {
    const lines = data.trim().split('\n');  // Split input into lines
    const employeeCount = parseInt(lines[0].split(': ')[1]);  // Extract number of employees
    const items = lines.slice(2)  // Extract goodies and prices from the lines
        .map(line => {
            const [itemName, itemPrice] = line.split(': ');  // Separate item name and price
            return { name: itemName.trim(), price: parseInt(itemPrice.trim()) };  // Create an object for each goodie
        })
        .sort((a, b) => a.price - b.price);  // Sort goodies by price in ascending order

    let smallestDifference = Infinity;  // Initialize smallest difference between highest and lowest prices
    let bestRangeStartIndex = 0;  // Track the starting index of the best goodies selection

    // Loop to find the smallest price difference for 'employeeCount' items
    for (let i = 0; i <= items.length - employeeCount; i++) {
        const priceDifference = items[i + employeeCount - 1].price - items[i].price;  // Calculate price difference between current highest and lowest items
        if (priceDifference < smallestDifference) {
            smallestDifference = priceDifference;  // Update if a smaller difference is found
            bestRangeStartIndex = i;  // Store the starting index of the best range
        }
    }

    // Extract the best set of goodies based on the starting index and number of employees
    const selectedGoodies = items.slice(bestRangeStartIndex, bestRangeStartIndex + employeeCount);
    return { selectedGoodies, smallestDifference };
}

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for the input file name
rl.question('Please enter the input file name: ', (fileName) => {
    // Read the input file provided by the user
    fs.readFile(fileName, 'utf-8', (err, inputData) => {
        if (err) {
            console.error('Error reading file:', err);
            rl.close();
            return;
        }

        // Call the function to allocate goodies
        const result = allocateGoodies(inputData);

        // Format output as a string
        const resultOutput = `The goodies selected for distribution are:\n` +
                             result.selectedGoodies.map(goodie => `${goodie.name}: ${goodie.price}`).join('\n') +
                             `\nAnd the difference between the chosen goodie with highest price and the lowest price is ${result.smallestDifference}`;

        // Write output to a file
        fs.writeFileSync('sample_output.txt', resultOutput);  // Save the output to a file
        console.log(resultOutput);  // Print the result

        rl.close();  // Close the input interface
    });
});
