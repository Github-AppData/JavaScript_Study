// 변수

// var는 선언하기 전에 사용할 수 있다. 

// 호이스팅 - 스코프 단위로 일어난다. ( { } - 스코프 )
// : 스코프 범위 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// 즉, 아래에 선언이 되어있더라도, 위에 선언된 것 처럼 사용이 가능하다. 
// const, let도 호이스팅이 되지만, var 처럼 작동하지는 않는다.
// Temporal Dead Zone 때문이다. - 할당을 하기 전에 사용할 수 없다. 

// var는 선언 및 초기화 단계를 같이 한다. (1. 선언 및 초기화 단계 2. 할당단계)
// 그래서 에러를 일으키지 않고, undefind를 출력하는 것이다.
// * 초기화 : undefined를 할당 해주는 단계

// let은 1. 선언 2. 초기화 3. 할당
// 호이스팅 되면서, 선언 단계가 일어나지만, 초기1화는 실제 코드에 도달해야 한다.

// const : 선언 + 초기화 + 할당이 같이 되어야 한다. 

// var는 함수 스코프 - 유일하게 벗어날 수 없는 스코프가 '함수' 스코프이다.
// let, const는 선언된 {} 에서만 사용이 가능하다.

// var는 function을 제외한 나머지(if, for, while...)에서도 블록 바깥에서, 사용이 가능하지만
// let, const는 아니다.

function age()
{
    console.log(`호이스팅 테스트 ${age}`)

    const age = 1000;
}

age();
