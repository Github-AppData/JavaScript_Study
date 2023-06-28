// 비교 연산자, 조건문
/*console.log(10 > 5);
console.log(10 == 5)
console.log(10 != 5)*/

// 동등 연산자 - 값만 같으면 된다.
const a = 1;
const b = "1";

console.log(a == b);

// 일치 연산자 - Data type 까지 같아야 한다.
console.log(a === b);

// 조건문
// 19살 이면, 수능 잘 치세요 라는 문구가 나와야 한다.

const age = 18;

if(age > 19 || age < 19)
{
    console.log("19세가 아닙니다");
} else {
    console.log("19세 !");
}