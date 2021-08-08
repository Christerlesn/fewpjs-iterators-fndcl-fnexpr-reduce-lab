const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function addTheBatteries(allBatteries, numbers){
    return allBatteries += numbers
}
var totalBatteries = batteryBatches.reduce(addTheBatteries)
