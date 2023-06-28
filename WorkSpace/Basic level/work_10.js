// function

// 매개변수가 없는 함수.

function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요. ')
}

showError();

// 전역변수와 지역변수 - 범위 차이
// 매개변수가 있는 함수. 
// - if문을 이용해서 name이라는 변수에 값이 있는지 확인하는 코드
// function sayHello(name)
// {
//     let msg = `Hello, `;
//     if(name){
//         msg += name;
//     }
//     console.log(msg);
// }

// sayHello('Mike');
// sayHello();
// sayHello('Tom');
// console.log(name);

// or문을 이용해서 name에 값이 있는지 확인하고 결과를 출력하는 코드
// function sayHello(name)
// {
//     let newName = name || 'freiend';
//     let msg = `Hello, ${newName}`;
//     console.log(msg);
// }

// sayHello(); // or 연산자를 통해서, 출력 값이 달라진다.
// sayHello('jane');

// 매개변수에 기본 값을 설정
function sayHello(name = 'java')
{
    let msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello(); // or 연산자를 통해서, 출력 값이 달라진다.
sayHello('jane');

// return으로 값 반환

function add (num1, num2)
{
    return num1 + num2;
}

const result = add(1,100);
console.log(result)

