/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/176962
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 50분
 * 성공 여부: 예
 */

function solution(plans) {
    //1. transfer data format
    let plan = plans.sort((a,b) =>  a[1] < b[1] ? -1 : a[1] > a[1] ? 1 : 0 )
                .map(i => i.map((i,index) => index==1?new Date("1970-01-01 "+i):i)) 
                .map(i => i.map((i,index) => index==2?i*60000:i))
    let tmp = []
    let answer = []

    for(let i=0; i<plan.length; i++){
        let name = plan[i][0]
        let end = new Date(plan[i][1].getTime() + plan[i][2])

        //2. compare and add
        if(i != plan.length-1){
            let next = plan[i+1][1]
            let rest = next - end
            rest >= 0 ? answer.push(name) : tmp.unshift([name, end-next])

            while(rest > 0 && tmp.length>0){
                rest = rest - tmp[0][1]
                rest >= 0? answer.push(tmp.shift()[0]) : tmp[0][1] = Math.abs(rest)
            }
        }else{
            //3. assemble
            answer.push(name, ...(tmp.map(i=> i[0])))
        }
    }  
    return answer
}
