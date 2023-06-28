// switch 문

let fruit = prompt('무슨 과일을 사고 싶나요 ?')

switch(fruit)
{
    case '사과':
        console.log('1000 원입니다.')
        break
    case '바나나':
        console.log('3000 원입니다.')
        break
        
    case '토마토':
        console.log('5000 원입니다.')
        break
    default :
        console.log('그런 과일은 없습니다.')
}