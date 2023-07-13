// Previous push, pop, shift, unshift
// Array Part 2-1.'

// arr.splice(n,m) : (시작, 갯수) 특정 요소 지움.
// arr.splice(n, m, x) : 특정 요소 지우고 x 추가

// let arr = [1,2,3,4,5]
// console.log(arr.splice(1,2)); // 2, 3 제외
// console.log(arr)

// console.log(arr)
// console.log(arr.splice(1,2, 100, 200))
// console.log(arr)

// // 활용 - splice 두 번째 인자에 0을 쓰면 아무것도 지우지 않고, 추가가 가능하다.
// let arr2 = ["나는", "철수", "입니다."];
// console.log(arr2)
// console.log(arr2.splice(1,0,"대한민국", "소방관")); // 0과 1 사이에 아무것도 지우지 않고, 추가가 가능하다.
// console.log(arr2)
// console.log(arr2.splice(0,2,"저는"))
// console.log(arr2)

// let result1 = arr2[0];
// let result2 = arr2[1];

// console.log(result1 + " " + result2);

// // arr.slice(n,m) : n부터 m까지 반환
// let arr3 = [1,2,3,4,5];
// console.log(arr3.slice(1,4));

// console.log(arr3);

// // arr.concat(arr2,arr3...) : 합쳐서 새배열 반환
// let arr5 = [1,2,100];

// console.log(arr5.concat([200,400]));
// console.log(arr5.concat([200,400],500,1000));

// // forEach 

// let ars = ["Mike", "Tom", "Sike"];

// ars.forEach((item, index) => {
//     console.log(`${index + 1}. ${item}`);
// });

// // arr.indexOf / arr.lastIndexOf => () 안에 있는 숫자 탐색해서, 인덱스 반환 (last는 뒤에서 부터)
// console.log(ars.indexOf("Sike"));
// console.log(ars.lastIndexOf("ㄴㄴㄴ"));

// // arr.includes - 있는지 없는지 true, false로만 알고 싶을 때.
// console.log(ars.includes("Sikes"));

// // arr.find(fn) / arr.findIndex(fn) - IndexOf와 같은 기능을 하지만, 함수를 전달할 수 있는 것이 다르다.
let aos = [1,2,3,4,5];

const result10 = aos.find((item) => {
    return item % 2 == 0;
})

console.log(result10);

// 활용
let userList = [
    {name: "Mike", age : 30},
    {name: "Moke", age : 10},
    {name: "Jam", age : 22}
]

// 인덱스로 찾기 힘들 때, find를 쓴다.
const result90 = userList.find((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});

console.log(result90);

// findIndex는 조건에 알맞는 Index를 반환한다.
const result91 = userList.findIndex((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});

console.log(result91);

let os = [1,2,3,4,5]

// arr.filter() : 만족하는 모든 요소를 배열로 반환
const result92 = os.filter((item) => {
    return item % 2 == 0; // 
});

console.log(result92);

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고, 새로운 배열을 반환.
let newUserList = userList.map((user, index) => {
    return Object.assign({}, user,{
        isAdult : user.age > 19
    });
});

console.log(newUserList);
console.log(userList);

// join : 배열을 합쳐서 문자열을 만드는 기능
// () 안에 아무것도 없으면 , 넣는다.

let arr = ["안녕", "나는", "스파이더맨이야"];
let result23 = arr.join("-");

console.log(result23);

// split : 문자열을 () 기준으로 나눠서 배열로 만들어주는 기능
// () 안에 ""가 들어 있으면, 한 글자 씩 배열로 !
const users1 = "Mike, is very good !"
const result122 = users1.split("");

console.log(result122);

// typeof는 객체와 배열을 모두 Object로 처리한다. - 구분을 하지 못한다.
// Array.isArray()는 boolean 자료형 반환을 통해 배열인지 아닌지 확인시켜 준다.

let oob = {
    name : "iosa",
    age : 1001230
};

let ioasd = ["sasd", "asasd", "asasd"];

console.log(typeof oob);
console.log(typeof ioasd);

console.log(Array.isArray(oob));
console.log(Array.isArray(ioasd));









