/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/155651
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 45분
 * 성공 여부: 아니요 (15.8%)
 *
 * 두번째 풀이
 * 풀이 시간: 25분
 * 성공 여부: 예
 */

function solution(book_time) {
  const times = [];
  book_time.forEach((time) => {
    let [start, end] = time;
    start = start.split(":");
    end = end.split(":");
    times.push([start[0] * 60 + Number(start[1]), "in"]);
    times.push([end[0] * 60 + Number(end[1]) + 10, "out"]);
  });

  times.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] !== b[1] && b[1] === "out") return 1;
      else return -1;
    } else return a[0] - b[0];
  });

  let answer = 0,
    count = 0;
  times.forEach((time) => {
    let [_, type] = time;
    if (type === "in") count += 1;
    else count -= 1;
    answer = Math.max(answer, count);
  });

  return answer;
}
