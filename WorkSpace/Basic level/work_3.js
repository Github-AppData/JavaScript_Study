// alert, prompt, confirm

// 단점 : 스크립트 일시정지, 스타일링 X
// prompt (입력받음), alert (확인)
let name = prompt("이름을 입력하세요 : ");
alert(name);

// confirm (확인받음)
const isAdult = confirm("당신은 성인입니까 ? ");
console.log(isAdult);