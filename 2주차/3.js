const addArr = (arr1, findNum) => {
    const newArr = arr1.map((item) => {
        return item + 10;
    });
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === findNum) {
            newArr.splice(
                newArr.findIndex((item) => item === findNum),
                1
            );
            console.log(`${newArr}`);
        }
    }
    console.log(`결과값이 없습니다`);
};

const arr = [1, 2, 3, 4, 5];

addArr(arr, 16);
