const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const binarySearch = (arr: number[], value: number) => {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }

    middle = Math.floor((start + end) / 2)
  }

  return arr[middle] === value ? middle : -1
}

// Best case scenario for Binary Serach is O(1)
// however, worst / average case is O(log n)
// which is basically the same thing as O(1)
