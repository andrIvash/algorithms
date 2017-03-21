//binary sorting


const arr = [12, 23, 123, 56, 43, 77, 34, 6, 89, 23, 231, 2, 5, 8, 111, 24];
let arrSorted = arr.sort((a, b) => {return a - b});
console.log(arrSorted);

function binarySort (sorted, query) {
    let min = 0;
    let max = sorted.length -1;
    let n = 0;
    while (min <= max) {
        n++;
        let mid =  Math.ceil((min + max) / 2);
        let guess = sorted[mid];
        if (guess == query) {
            return `${mid} : ${n}`;
        } else {
            (guess > query) ? max = mid - 1 : min = mid + 1;
        }
    }
    return `not found : ${n}`;
}

console.log(binarySort(arrSorted, 231));
