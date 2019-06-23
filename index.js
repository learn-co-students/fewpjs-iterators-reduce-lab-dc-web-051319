const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//function: add all batches together for total sum.

// use .reduce to add each batch to the total number before it,
//then proceed to next batch
//intialvalue at 0, sum up batch to equal current total, then sum up next batch and add that to current todal(total + batch).
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0)
