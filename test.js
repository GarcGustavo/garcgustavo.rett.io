// JavaScript code below
// Use printErr(...) to debug your solution.

function findLargest(numbers) {
    var lastNum;
    for(i in numbers){
        if(lastNum == null){
            lastNum = numbers[i];
        }
        if(lastNum <= numbers[i]){
            lastNum = numbers[i];
        }
    }
    return lastNum;
}