// String

// ` 은 여러줄을 쓸 수 있다.
// length : 문자열 길이

// [] 로 특정 위치에 접근 - 0 부터 시작 (변화는 불 가능 하다.)
// toUpperCase() / toLowerCase() : 대/소문자 변경

// str.indexOf(text) - text 문자의 위치를 반환 (첫 위치 반환)
// 찾는 문자열이 없으면, -1 반환

let str = "Hi everyone !"
if(str.indexOf('Hi') > -1)
{
    console.log('Yes, in Hi')
}

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(0,3))
console.log(str.slice(3,-2)) // - 는 끝에서부터 카운트 시작.

// str.substring(n, m)
// n과 m 사이 문자열 반환
// n과 m을 바꿔도 동작
// 음수는 0으로 인식 - 음수를 허용하지 않는다.

let desc = "abcdefg"

console.log(desc.substring(2,5));
console.log(desc.substring(5,2));

// substr(n,m) - n 부터 시작해서, m개를 가져온다.
console.log(desc.substr(2,4));
console.log(desc.substr(-4,2));

// str.trim() : 앞 뒤 공백 제거
let desc2 = "    coding         "
console.log(desc2.trim());

// str.repeat(n) - str n번 반복
console.log(desc.repeat(3));

// 문자열 비교
console.log("a".codePointAt(0)); // 97
console.log(String.fromCodePoint(97)); // a

// 실용적인 예제

// 목차
let list = [
    "01, 들어가며",
    "02, 일본",
    "03, 미국",
    "04, 대한민국",
    "05, 헝가리",
    "06, 마치며",
];

let newList = [];

for(let i = 0; i < list.length; i++)
{
    newList.push(list[i].slice(4)) // 4 부터 끝까지.
}

console.log(newList)

// 금칙어 : 콜라
// includes 포함한 예제 - 문자가 있으면 true, 없으면 false

function hasCola(str){
    if(str.indexOf('콜라') > -1){
        console.log('금칙어가 있습니다.')
    }
    else{
        console.log('통과')
    }

}
hasCola("와 사이다가 짱이야")
hasCola("무슨 소리, 콜라가 최고")
hasCola("콜라")

// 금칙어 : 콜라
// includes 포함한 예제 - 문자가 있으면 true, 없으면 false

function hasCola(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.')
    }
    else{
        console.log('통과')
    }

}
hasCola("와 사이다가 짱이야")
hasCola("무슨 소리, 콜라가 최고")
hasCola("콜라")
