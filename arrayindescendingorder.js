function sortArrayDescending(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    });
}

const inputArray = [5, 2, 9, 1, 4, 8];
const sortedArray = sortArrayDescending(inputArray);
console.log("Array in descending order is:",sortedArray.join()); // Output: "9, 8, 5, 4, 2, 1"
