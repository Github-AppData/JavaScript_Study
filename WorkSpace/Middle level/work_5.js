// Number, Math

// 10 진수 -> 2/16진수 변환

let num = 15;

num.toString();
console.log(num.toString(2)); // () 은 진법 변환
console.log(num.toString(8));
console.log(num.toString(16));

// Math.PI
// Math.ceil() : 올림
// Math.floor() : 내림
// Math.round() : 반 올림

// 요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반 올림)

let num1 = 25.1905
console.log(Math.round(num1 * 100) / 100);

// 소수점 자릿수 : toFixed() - 문자형으로 변환 (그래서 Number()로 숫자로 변환 후 작업한다.)

let userRate = 56.2112;
console.log(userRate.toFixed(2));
console.log(userRate.toFixed(0)); // 0일 경우에는 정수로
console.log(userRate.toFixed(10)); // 소수부 보다 많을 경우 0 으로 채워진다.

// isNaN : Not a Number 숫자가 아니다.
// == 와 === 로 NaN 인지, 아닌지 판단하지 못한다.
// 오직 isNaN로만 판단이 가능하다.

console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(isNaN("ssss"))
console.log(isNaN(userRate))

// parseInt()
// : 처음 부터 읽을 수 있는 부분 까지 읽고, 문자 인 부분은 버린다.

let a = '10px'

console.log(parseInt(a)); // 10
console.log(Number(a)); // NaN

// 문자가 앞에 나와 있는 변수는 NaN 처리한다.
// parseInt의 두 번째 인자는 
let b = 'f10'
console.log(parseInt(b)); // NaN
console.log(parseInt(b, 16)); // b를 16진수로 바꾸어준다.

console.log(parseInt('11', 2));


// parseFloat() : 부동소수점을 반환
// parseInt() 와 같은 동작을 함. 다만 소수점을 반환한다.
let as = '18.5%'
console.log(parseFloat(as))

// Math.random() : 랜덤 숫자 - 완전한 랜덤이 아니다.
// Math.floor() : 소수점 이하 숫자를 버린다.
for(let i = 0; i < 10; i++)
{
    console.log(Math.floor(Math.random()* 100) + 1);
}

// Math.max() / Math.min() : 최대 값과 최소 값
console.log(Math.max(1,2,1000000,123123123,123111));
console.log(Math.min(1,2,1000000,123123123,123111));

// Math.abs() / Math.pow() : 절댓값, 제곱
console.log(Math.abs(-1111));
console.log(Math.pow(2,10))

// Math.sqrt() : 제곱근
console.log(Math.sqrt(16));