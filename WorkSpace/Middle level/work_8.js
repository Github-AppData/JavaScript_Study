const _ = require('lodash');

// 배열 재정렬
// arr.sort()
// 배열 자체가 변경됨
// 인수로 정렬 로직을 담은 함수를 받음

let arr = [1,6,2,1000,203,3010];

// 제대로 된 정렬을 하려면 비교하는 함수를 줘야 한다.

// a, b를 비교해서 b가 더 크면 가만히 있고, / 1a가 크고, 0이 나온다면 가만히 있는다. 
arr.sort((a,b) => {
    console.log(a,b);
    return a - b;
});

console.log(arr);

// _.remove : 원하는 조건에 해당되는 값은 기존 array에서 제거되어 배열로 반환
const array = [1,2,3,4,8,10];
const evens = _.remove(array, function(n){
    return n % 2 == 0;
});

const arraySort = [1,1001231,200,12399,999,1230];

const resultSort = _.sortBy(arraySort);
console.log(resultSort);

console.log(evens);

// reduce : 배열을 돌면서 원하는 작업을 하고 최종 값을 반환한다.
// (누적 계산값, 현재값) => {return 계산 값};
// for, for of, forEach

const result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0) // <- 초기 값. 안 쓰면 첫 번째 요소가 자동으로 들어간다.

console.log(result);

// reduce의 실용적인 예제
let userList = [
    {name : "Mike", age : 30 },
    {name : "Moke", age : 19 },
    {name : "oake", age : 29 },
    {name : "Kake", age : 21 },
    {name : "kaske", age : 5 },
    {name : "pokse", age : 40 },
    {name : "kikasd", age : 3 },
];

// 성인만 뽑아서 list를 만듬.
let result2 = userList.reduce((prev, cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;

}, []);

let sasd;

// 뽑은 성인 리스트의 나이의 함을 만듬.


