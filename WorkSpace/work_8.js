// 반복문 (for, while, do while)

// 1부터 1000까지 로그를 찍어라 - for문으로 !
// for(let i = 1; i <= 1000; i++)
// {
//     console.log(i);
// }

// 1부터 1000까지 로그를 찍어라 - while 문으로 !
let i = 1;
while(i <= 1000)
{
    console.log('i : ' + i);
    i++;
}

// continue
for(let i = 0; i < 10; i++)
{
    if(i % 2)
    {
        continue;
    }
    console.log(i);
}


