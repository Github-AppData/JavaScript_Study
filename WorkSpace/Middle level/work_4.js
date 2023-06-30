// 심볼 (Symbol)

// 여태까지 객체의 프로퍼티의 키들은 '문자형' 이었다.
// 유일한 식별자를 만들 때, 'Symbol'을 사용한다. - 유일성 보장
// 객체에 집어넣어도, Object.keys, entries, valuse... 등으로 출력이 안된다. 
// 그래서 원본 객체의 데이터를 건들지 않고, 프로퍼티를 추가 할 때 사용이 된다.

// Symbol.for() : 전역 심볼 - 코드 어디에서든 사용 가능
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만, 
// Symbol.for 메소드는 하나를 생성한 뒤, 키를 통해 Symbol을 공유

// Symbol.for() 의 이름을 알고 싶으면, keyFor()를 이용해서 알 수 있다.
// 일반 Symbol은 keyFor()을 사용할 수 없다.

// 객체의 숨겨진 Symbol key를 보는 법
// (feat. Symbol을 완전히 숨길 수는 없다.)

// Object.getOwnPropertySymbols(user); - Symbol의 숨겨진 키들을 볼 수 있다.
// Reflect.ownKeys(user) - Symbol을 포함한, 객체의 모든 키들을 볼 수 있다.
// 대부분의 라이브러리, 내장함수는 이런 메소드를 사용하지 않는다.

// 유일한 프로퍼티를 사용하고 싶을 때는 Symbol을 !

// 다른 개발자가 만들어 놓은 객체
const user = {
    name : "Mike",
    age : 30,
}

// 내가 작업
const showName = Symbol('id');
user [showName] = function(){
    console.log(this.name);
}

user[showName]();

// 사용자가 접속하면 보는 메세지
for(let key in user){
    console.log(`His ${key} is ${user[key]}.`)
}

console.log(Object.values(user))


