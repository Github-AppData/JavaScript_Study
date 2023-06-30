// 객체에서 사용할 수 있는 몇 가지 메소드와 Computed property

// Computed property - 계산된 프로퍼티

// Methods
let n = "name"
let a = "age"

// [] 안에 넣으면, a 라는 변수로 된다.
const user = {
    [n] : "Mike",
    [a] : 20,
    [1 + 120] :  5,
};

console.log(user)

// 어떤게 키가 될지 모르는 객체를 만들 때에 유용하다.
function makeObject(key, val){
    return {
        [key] : val,
    }
}

const obj = makeObject("이름", 33)

// 객체
console.log(obj)

const user1 = {
    name : "Mike",
    age : 30,
}

// X - 이것은 참조하는 방식이어서, 객체의 값이 본래도 바뀐다.
// const user2 = user; 

// Object.assign() : 객체 복제 (복제된 객체의 값을 바꾸어도, 본래의 객체는 값이 바뀌지 않는다.)
// 여러 개를 하나로 합칠 수 있다.
const user2 = Object.assign({}, user1)
user2.name = "Tom"

console.log(user2)
console.log(user1)

// Object.keys(user) : 키 배열 반환
const result = Object.keys(user1)
console.log("keys : " + result)

// Object.values() : 값 배열 반환
const result1 = Object.values(user1)
console.log(`values : ${result1}`)

// Object.entries() : 키/값 배열 반환
const result2 = Object.entries(user1)
console.log("entries : " + result2)

// Object.fromEntries() : 키/값 배열을 객체로
let arr = [
    ['mon', '월'],
    ['tue', '화'],
]

const result3 = Object.fromEntries(arr)
console.log(result3)

console.log(result3)





