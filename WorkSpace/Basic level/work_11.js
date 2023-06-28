// 함수 선언문 vs 함수 표현식

// javascript 인터프리터 방식

// 함수 선언문 : 어디서든 호출 가능
// 자바스크립트 내부 알고리즘 때문에 선언 부가 밑에 있어도, 실행이 가능하다.
// 프로그램 시작 전에, 함수 선언문을 찾아서 생성. (호이스팅) - 코드위치 실제로 올라가는 것은 아니다.

// 함수 표현식
// const showError = (name) => {
//     const msg = `Hello, ${name}`
//     console.log(msg);
// }
// showError('asdasdad');



const add = (num1, num2) => num1 + num2;
console.log(`${add(111, 99)}`)

const showAsd = (Newname) => {
    const msg = `Hello, ${Newname}`;
    console.log(msg);
    return `bye,  ${Newname}`;
}

console.log(`${showAsd('Giral')}`);