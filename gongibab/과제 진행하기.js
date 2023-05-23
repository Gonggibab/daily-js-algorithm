/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/176962
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 60분
 * 성공 여부: 아니요
 */

function solution(plans) {
  let list = [];
  plans.forEach((plan) => {
    const time = plan[1].split(":");
    const start = time[0] * 60 + Number(time[1]);
    list.push([plan[0], start, Number(plan[2])]);
  });
  list.sort((a, b) => a[1] - b[1]);

  let answer = [];
  let index = 0;
  let running = [];
  let waiting = [];
  list.forEach((plan) => {
    console.log(waiting);
    if (running.length === 0) {
      running.push(plan);
    } else {
      if (plan[1] < running[1] + running[2]) {
        waiting.push([running[0], running[2] - (plan[1] - running[1])]);
        running.pop();
        running.push(plan);
      } else if (waiting.length === 0) {
        answer.push(running.pop()[0]);
        running.push(plan);
      } else {
        // if (plan[1] > waiting[1] + waiting[2])
      }
    }
  });

  return answer;
}
