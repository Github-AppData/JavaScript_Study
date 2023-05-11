// 논리연산자
// 3가지 or and nor

// 나이를 입력받아 성인이면, 돌아가라고 이야기
// const age = prompt("나이가 어떻게 되시나요 ? ");

// if(age >= 20)
// {
//     console.log('성인 입니다.')
// }
// else
// {
//     console.log('돌아가세요.');
// }

// 우선순위
// 남자이고, 이름이 Mike이거나 성인이면 통과

const isSex = prompt("남성인가 여성인가 ? ");
const name = prompt("이름은 어떻게 되는가 ? ");
const isAge = prompt("몇살인가 ? ");

if(isSex === '남자' && (name === 'Mike' || isAge >= 20))
{
    console.log("통과")
}
else {
    console.log('노');
}