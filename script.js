function insertionSort(arr) {
    const length = arr.length;

    for (let i = 1; i < length; i++) {
        let currentValue = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than currentValue
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentValue;
    }

    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original Array:", array); // [12, 11, 13, 5, 6]

const sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray); // [5, 6, 11, 12, 13]



//This algorithm iterates through the array starting from the second element (i = 1). For each element, it checks the elements before it in the sorted part of the array (from 0 to i - 1) and inserts the current element (arr[i]) into its correct position by shifting the larger elements one position to the right.





