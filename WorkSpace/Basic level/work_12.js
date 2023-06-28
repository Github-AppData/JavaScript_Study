// Object 객체
const superman = {
    name:'clark',
    age:'33',
    sex : 'male',
}

// console.log('key 추가 전, name 삭제 전')
// console.log(`${superman.key}`)
// console.log(`${superman.sex}`)
// console.log(`${superman.age}`)
// console.log(`${superman.name}`)
// console.log("");

// superman.key = '182';
// console.log('key 추가 후, name 삭제 후')
// console.log(`${superman.key}`)

// delete superman.name;
// console.log(`${superman.name}`)

// 존재하지 않는 요소 접근 and 확인
const result2 = superman.birthDay;
console.log(result2);

// 언제 in을 사용할까 - 어떤 값이 넘어올지 확신 할 수 없을 떄
const result = 'birthDay' in superman;
console.log(result);

// living, year 추가
superman.living = 'hobby';
superman['year'] = '2002';
console.log(superman)

// year 삭제 후
delete superman.year;
console.log(superman)

// 다양한 객체 형태
function makeObject(name, age){
    return{
        name, // == name : name
        age, // == age : age
        hobby:"football"
    };
}

const Mike = makeObject("Mike", 32);
console.log(Mike);

console.log("age" in Mike)
console.log("asdasd" in Mike)

// 객체의 다양한 활용 형태
function isAdult(user){
    // age 라는 매개변수가 없으면, 성인이 아닌 것으로 판단.
    if(!('age' in user) || // user에 age가 없거나
    user.age < 20){ // 20살 미만이면, 
        return false;
    }
    return true;
}

const Moke = {
    name : 'Moke',
    age : 30,
}

const ioa = {
    name : 'ioa',
    age : 19,
}

const iooaa = {
    name : 'iooaa',
}

console.log(isAdult(iooaa))

// 객체 for....in
const Mp = {
    name:'Mike',
    age : 30
}

for(x in Mp){
    console.log(Mp[x])
}