// 편의점 물건 확인하기
const storeList = [
    { product: '야채곱창', price: 5 },
    { product: '바나나우유', price: 10 },
    { product: '삼각김밥', price: 15 },
    { product: '도시락', price: 10 },
    { product: '샌드위치', price: 10 },
];

let err = {
    1: () => {
        console.log('전산표와 일치합니다.');
    },
    2: () => {
        console.log('전산표와 일치하지 않습니다.');
    },
    3: () => {
        console.log('바사삭치킨');
    },
};

function confirm(a, b) {
    for (let i = 0; i < storeList.length; i++) {
        // 품명 일치할떄
        if (storeList[i].product === a) {
            // 1. 품명과 갯수가 일치할떄
            if (storeList[i].price === b) {
                return err[1]();
            } else {
                // 2. 품명은 일치하지만 갯수가 일치하지 않을떄
                return err[2]();
            }
        }
    }
    return err[3]();
}

confirm('샌드위s치', 10);
confirm('야채곱창', 5);
