README guide on how to run Problem 1 and Problem 2 in the command terminal:

# README

## Overview

This repository contains solutions to two programming problems related to job scheduling and distribution of goodies. Each problem is implemented in Node.js and provides a command-line interface for user interaction.

### Problem 1: Job Scheduling
This program calculates the maximum profit that an employee named John can earn by selecting non-overlapping jobs, as well as the number of jobs and earnings available for other employees.

### Problem 2: Distribution of Goodies
This program determines the best distribution of goodies among employees, ensuring that the difference between the highest and lowest priced goodies is minimized.

## Requirements

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Running the Solutions

### Problem 1: Job Scheduling

1. **Navigate to the Project Directory**:
   Open your command terminal and navigate to the directory where the `problem1.js` file is located. Use the `cd` command:
   ```bash
   cd path/to/your/project
   ```

2. **Run the Program**:
   Execute the following command to run the job scheduling program:
   ```bash
   node problem1.js
   ```

3. **Input Format**:
   - Enter the number of jobs when prompted.
   - For each job, input the start time (in HHMM format), end time (in HHMM format), and profit sequentially.

   Example input:
   ```
   Enter the number of jobs: 3
   Enter details for job 1:
   Start time (in HHMM format): 0900
   End time (in HHMM format): 1030
   Profit: 100
   Enter details for job 2:
   Start time (in HHMM format): 1000
   End time (in HHMM format): 1200
   Profit: 500
   Enter details for job 3:
   Start time (in HHMM format): 1100
   End time (in HHMM format): 1200
   Profit: 300
   ```

4. **Output**:
   After entering all job details, the program will output the number of tasks left for other employees and the earnings available for them.

---

### Problem 2: Distribution of Goodies

1. **Navigate to the Project Directory**:
   Open your command terminal and navigate to the directory where the `problem2.js` file is located. Use the `cd` command:
   ```bash
   cd path/to/your/project
   ```

2. **Run the Program**:
   Execute the following command to run the goodies distribution program:
   ```bash
   node problem2.js
   ```

3. **Input Format**:
   - When prompted, enter the name of the input file containing the goodies and their prices. The file should follow this format:
     ```
     Number of employees: 4
     Goodies and Prices:
     Fitbit Plus: 7980
     IPods: 22349
     MI Band: 999
     Cult Pass: 2799
     Macbook Pro: 229900
     Digital Camera: 11101
     Alexa: 9999
     Sandwich Toaster: 2195
     Microwave Oven: 9800
     Scale: 4999
     ```

4. **Output**:
   After processing the input file, the program will create a file named `sample_output.txt` with the selected goodies and the price difference between the highest and lowest priced goodies.

---

## Example of Execution

To run the job scheduling program:
```bash
node problem1.js
```

To run the goodies distribution program:
```bash
node problem2.js
```

## Conclusion

This README provides a step-by-step guide on how to run the solutions for both problems using Node.js in a command-line terminal. 
