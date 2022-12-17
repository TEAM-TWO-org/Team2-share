function maxvalue(arr) {
    arr.sort((a, b) => {
        return b - a;
    }); // 구글링
    console.log(`maxValue : ${arr[0]}`);
    console.log(`SortArr : ${arr}`);
}

const arr = [1, 32, 2, 99, 4];

maxvalue(arr);
