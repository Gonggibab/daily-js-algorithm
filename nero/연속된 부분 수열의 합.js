/*
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 20분
 * 성공 여부: 아니오
 */
 
 function solution(sequence, k) {
    let seq = sequence
    let answer = []
    
    //1. check partial sum location
    for(let i=0; i< seq.length; i++){
        for(let j=i;j<= seq.length;j++){
            seq.slice(i,j+1).reduce((a,b)=>a+b) == k?answer.push([i,j]):0
        }
    }
    
    //2. check additional condition
    if(answer.length > 1)
        answer = answer.filter(i=>(i[1]-i[0])==Math.min(...answer.map(i=>i[1]-i[0])))

    return answer.shift()
}
