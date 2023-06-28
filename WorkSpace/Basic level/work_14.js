// Array
// 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함 할 수 있다.

// push() : 배열 끝에 추가
// pop() : 배열 끝에 요소 제거
// shift, unshift : 배열 앞에 제거/추가

let days = ["mon", "tue", "wed"];

days.push("thu")
days.unshift("sun", "jyhn");

for(let i = 0; i < days.length; i++){
    console.log(days[i]);
}
