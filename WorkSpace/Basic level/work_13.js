// Object - method : 객체 프로퍼티로 할당 된 함수

// // const superman = {
//     name : 'sasd',
//     fly(){
//         console.log("날아갑니다.")
//     }
// }

let boy = {
    name : "Mike",
    showName : function(){
        console.log(this.name)
    }
};

let man = boy; // 사람은 한 명인데, 별명은 두 개이다.

// man의 이름을 Tom으로 바꾸면, boy의 이름도 바뀐다.
man.name = "Tom";


// 바꾼 후, 
console.log(boy.name)
man.showName();

boy = null; // 이제 man으로만 접근할 수 있다.
man.showName(); // Error 가 뜨면, 객체의 프로퍼티 부분을 this로 바꾸어주면 된다.
                // 메소드의 this는 해당 객체를 가르킨다.
            
// * 결론적으로는, 메소드에서는 객체의 이름보다 this 키워드를 이용하는 것이 좋다. *





