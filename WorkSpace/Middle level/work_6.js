// String

// ` 은 여러줄을 쓸 수 있다.
// length : 문자열 길이

// [] 로 특정 위치에 접근

// toUpperCase() / toLowerCase() - 대/소문자

// str.indexOf(text) - 찾는 문자열의 index를 알려준다.
// 결과가 없으면 -1을 반환한다.

let str = "Hi guys, Jamizo";
console.log(str.indexOf('ssss'));

if(str.indexOf('Hi') > -1)
{
    console.log("있다.")
}

if(str.includes('Jamizo'))
{
    console.log("includes ! : 있다.")
}

// str.slice(n,m) - 시작점, (없으면 문자열 끝까지, 양수면 그 숫자까지, 음수면 끝에서부터 셈)

let desc = "asdads"
console.log(desc.slice(2)); // index 숫자를 반환 하는 것이 아니라 문자를 반환하는 것이다.

// str.substring(n,m) - n과 m 사이 문자열 반환, n과 m을 바꿔도 동작, 음수는 0으로 인식 (처음부터 끝까지)
console.log(desc.substring(0));

let desc2 = "     trim ex    "
let desc3 = "abcdefg"
// str.substr(n,m) - n 부터 시작, m 개를 가져옴
console.log(desc3.substr(0,4));

// str.trim() : 앞 뒤 공백 제거
console.log(desc2.trim());

// str.repeat(n) : 문자열을 n번 반복
console.log(desc3.repeat(2))

// 문자열 비교
console.log(desc2 !== desc3)


// 활용 예제

let list = [
    "01, 들어가며",
    "02, 0202",
    "03, 0303",
    "04, 0404",
    "05, 0505",
    "06, 마치며"
]

let newList = [];

for(let i = 0; i < list.length; i++)
{
    newList.push(list[i].slice(4));
}

console.log(newList);


// 금칙어 콜라 
function hasCola(str) {
    if(str.indexOf("콜라") > -1){
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과")
    }
}

// 금틱어 '콜라' - 다른 버전
function hasColas(str) {
    if(str.includes('콜라')){
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과")
    }
}

hasColas("와 사이다가 짱이야");
hasColas("무슨소리, 콜라가 최고야");
hasColas("콜라");

hasCola("와 사이다가 짱이야");
hasCola("무슨소리, 콜라가 최고야");
hasCola("콜라");