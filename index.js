const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteries() {

let totalBatteries = batteryBatches.reduce(function(total, currentValue){
  
  return total + currentValue})
  return totalBatteries 
  
}

let totalBatteries = batteries() 