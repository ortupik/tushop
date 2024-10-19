const readline = require('readline');

// Function to process job scheduling and calculate profits for John and others
function computeJobScheduling(jobsInput) {
    const jobDetails = jobsInput.map(([start, end, profit]) => ({
        start: parseInt(start), // Job start time in HHMM
        end: parseInt(end),     // Job end time in HHMM
        profit: parseInt(profit) // Profit from the job
    }));

    // Sort jobs based on their ending time to enable non-overlapping job selection
    jobDetails.sort((a, b) => a.end - b.end);

    const jobCount = jobDetails.length;
    const maxProfit = new Array(jobCount).fill(0); // array to track max profit at each step

    // Initialize the first job profit
    maxProfit[0] = jobDetails[0].profit;

    // Loop through jobs to calculate the maximum profit possible without conflicts
    for (let i = 1; i < jobCount; i++) {
        let currentProfit = jobDetails[i].profit; // Current job profit
        let lastCompatibleJob = -1; // Variable to hold index of the last non-conflicting job

        // Perform binary search to find the last non-conflicting job
        let low = 0, high = i - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (jobDetails[mid].end <= jobDetails[i].start) {
                lastCompatibleJob = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // Add the profit of the last non-conflicting job if found
        if (lastCompatibleJob !== -1) {
            currentProfit += maxProfit[lastCompatibleJob];
        }

        // Update array with max profit up to the current job
        maxProfit[i] = Math.max(maxProfit[i - 1], currentProfit);
    }

    const johnTotalProfit = maxProfit[jobCount - 1]; // Max profit John can earn
    const overallProfit = jobDetails.reduce((sum, job) => sum + job.profit, 0); // Sum of all job profits
    const othersProfit = overallProfit - johnTotalProfit; // Profit available for other employees
    const remainingJobs = jobDetails.filter((_, index) => maxProfit[index] === johnTotalProfit).length; // Number of jobs left

    return [remainingJobs, othersProfit]; // Return remaining jobs and others' earnings
}

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to gather job data from the user dynamically
function getJobData() {
    rl.question('Enter the number of jobs: ', (jobCount) => {
        const totalJobs = parseInt(jobCount);
        const jobData = [];
        let jobsEntered = 0;

        // Recursive function to gather job details for each job
        function askJobDetails() {
            if (jobsEntered < totalJobs) {
                console.log(`Enter details for job ${jobsEntered + 1}:`);
                rl.question('Start time (in HHMM format): ', (start) => {
                    rl.question('End time (in HHMM format): ', (end) => {
                        rl.question('Profit: ', (profit) => {
                            jobData.push([start, end, profit]);
                            jobsEntered++;
                            askJobDetails(); // Recursively ask for the next job's details
                        });
                    });
                });
            } else {
                // Call the scheduling function once all job details are collected
                const result = computeJobScheduling(jobData);
                console.log(`The number of tasks left for others: ${result[0]}`);
                console.log(`Earnings available for others: ${result[1]}`);
                rl.close(); // Close the readline interface
            }
        }

        askJobDetails(); // Start collecting job details
    });
}

// Start the process of gathering job data from the user
getJobData();
