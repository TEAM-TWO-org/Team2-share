function solution(getArr) {
    let even = []; // 짝수배열
    let odd = []; // 홀수배열
    let length = []; //길이
    getArr.map((item) => {
        if (item % 2 == 0) {
            even.push(item);
        } else if (item % 2 == 1) {
            odd.push(item);
        }
    });

    length.push(even.length);
    length.push(odd.length);

    console.log(`짝수 : [${even}]`);
    console.log(`홀수 : [${odd}]`);
    console.log(length);
}
const arr = [1, 31, 7, 8, 12];
solution(arr);
