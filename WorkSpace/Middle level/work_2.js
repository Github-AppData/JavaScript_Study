// 생성자 함수.

function Item(name, price)
{
    // this = {}
    this.name = name;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${this.price} 원 입니다.`)
    }

    // return this;
}

const item1 = new Item("가다랑어포", 4000) // new로 객체를 할당한 동시에 함수 내에 주석이 자동으로 실행 되어진다.

console.log(item1);
item1.showPrice();

